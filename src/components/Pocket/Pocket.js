import { useQuery } from '@tanstack/react-query'
import { listPosts } from '../../pocketbase/pb'

function Pocket() {
  const { isLoading, data, error } = useQuery({
    queryKey: ['posts'],
    queryFn: listPosts,
  })

  if (error) {
    return <p>Encountered errors 💀</p>
  } else if (isLoading) {
    return <p>Loading.. ⏳</p>
  }

  const posts = data?.map(record => (
    <div
      key={record.id}
      className="mx-auto w-fit rounded-md bg-base-300 px-4 py-3 shadow-sm"
    >
      <p className="text-md m-0 font-bold">{record.title}</p>
      <p className="m-0 text-sm">{record.content}</p>
    </div>
  ))

  return <>{posts}</>
}

export default Pocket
