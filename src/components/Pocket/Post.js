import { useState } from 'react'
import { pb } from '../../pocketbase/pb'
import EditIcon from './EditIcon'
import SaveIcon from './SaveIcon'
import TrashIcon from './TrashIcon'

function Post({ record, deletePost, updatePost }) {
  const [editing, setEditing] = useState(false)
  const [post, setPost] = useState(record)
  const editable = pb.authStore.model?.id === record.poster

  function handleChange(e) {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    })
  }

  let postBody
  if (editing) {
    postBody = (
      <>
        <input
          type="text"
          className="text-md input input-sm mb-3 w-full"
          name="title"
          value={post.title}
          onChange={handleChange}
        />
        <textarea
          className="textarea min-h-[120px] w-full text-sm"
          name="content"
          value={post.content}
          onChange={handleChange}
        />
      </>
    )
  } else {
    postBody = (
      <>
        <p className="text-md m-0 truncate font-bold">{post.title}</p>
        <p className="m-0 max-w-md text-sm">{post.content}</p>
      </>
    )
  }

  return (
    <div className="relative h-36 overflow-hidden rounded-md bg-base-300 py-4 pl-5 pr-10 text-left shadow-sm">
      {postBody}
      {editable && (
        <div className="absolute top-2 right-1">
          <label className="swap-rotate swap cursor-pointer transition-colors duration-200 hover:text-accent">
            <input
              type="checkbox"
              value={editing}
              onChange={e => {
                setEditing(e.target.checked)
                !e.target.checked && updatePost(post)
              }}
            />
            <span className="swap-off">
              <EditIcon />
            </span>
            <span className="swap-on">
              <SaveIcon />
            </span>
          </label>
        </div>
      )}

      {editable && !editing && (
        <div className="absolute top-9 right-2">
          <label
            className="cursor-pointer transition-colors duration-200 hover:text-accent"
            onClick={deletePost}
          >
            <TrashIcon />
          </label>
        </div>
      )}
    </div>
  )
}

export default Post
