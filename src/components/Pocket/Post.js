import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { pb, updatePost } from '../../pocketbase/pb'
import EditIcon from './EditIcon'
import SaveIcon from './SaveIcon'

function Post({ record }) {
  const prevEditing = useRef(false)
  const [editing, setEditing] = useState(false)
  const [post, setPost] = useState(record)
  const editable = pb.authStore.model?.id === record.poster

  useEffect(() => {
    async function update() {
      const updatePromise = updatePost(post)
      toast.promise(updatePromise, {
        pending: 'Updating post...',
        success: 'Post updated.',
        error: 'Error updating post!',
      })
      await updatePromise
    }

    // Save post
    if (prevEditing.current && !editing) {
      console.log('Title: ' + post.title)
      console.log('Content: ' + post.content)
      update().catch(e => console.log(e))
    }
    prevEditing.current = editing
  }, [editing, post])

  let postBody
  if (editing) {
    postBody = (
      <>
        <input
          type="text"
          className="text-md input input-sm mb-3 w-full"
          value={post.title}
          onChange={e =>
            setPost({
              ...post,
              title: e.target.value,
            })
          }
        />
        <textarea
          className="textarea min-h-[120px] w-full text-sm"
          value={post.content}
          onChange={e =>
            setPost({
              ...post,
              content: e.target.value,
            })
          }
        />
      </>
    )
  } else {
    postBody = (
      <>
        <p className="text-md m-0 font-bold">{post.title}</p>
        <p className="m-0 max-w-md text-sm">{post.content}</p>
      </>
    )
  }

  return (
    <div className="relative mx-auto mb-5 w-fit rounded-md bg-base-300 py-4 pl-5 pr-10 text-left shadow-sm">
      {postBody}
      {editable && (
        <label className="swap swap-rotate absolute top-2 right-2 cursor-pointer transition-colors duration-200 hover:text-accent">
          <input
            type="checkbox"
            value={editing}
            onChange={e => setEditing(e.target.checked)}
          />
          <span className="swap-off">
            <EditIcon />
          </span>
          <span className="swap-on">
            <SaveIcon />
          </span>
        </label>
      )}
    </div>
  )
}

export default Post
