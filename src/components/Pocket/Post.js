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
  const [title, setTitle] = useState(record.title)
  const [content, setContent] = useState(record.content)
  const editable = pb.authStore.model?.id === record.poster

  useEffect(() => {
    async function update() {
      const updatePromise = updatePost(record.id, {
        title,
        content,
      })
      toast.promise(updatePromise, {
        pending: 'Updating post...',
        success: 'Post updated.',
        error: 'Error updating post!',
      })
      await updatePromise
    }

    // Save post
    if (prevEditing.current && !editing) {
      console.log('Title: ' + title)
      console.log('Content: ' + content)
      update().catch(e => console.log(e))
    }
    prevEditing.current = editing
  }, [editing, title, content, record.id])

  let postBody
  if (editing) {
    postBody = (
      <>
        <input
          type="text"
          className="text-md input input-sm mb-3 w-full"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="textarea min-h-[120px] w-full text-sm"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </>
    )
  } else {
    postBody = (
      <>
        <p className="text-md m-0 font-bold">{title}</p>
        <p className="m-0 max-w-md text-sm">{content}</p>
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
