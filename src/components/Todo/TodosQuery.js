import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Todo from './Todo'

const useMutateTodos = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: newList => {
      return new Promise(resolve => setTimeout(resolve, 200, newList))
    },
    onSuccess: response => {
      queryClient.setQueryData(['todos'], response)
    },
  })
}

function TodosQuery() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos')
      const json = await res.json()
      json.splice(5)
      return json
    },
  })

  const mutation = useMutateTodos()

  function handleCheck(newTodo) {
    const newList = data.map(todo => {
      if (todo.id === newTodo.id) {
        return newTodo
      } else {
        return todo
      }
    })
    mutation.mutate(newList)
  }

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occured: ' + error.message

  return (
    <ol>
      {data.map(todo => (
        <Todo todo={todo} onChange={handleCheck} key={todo.id} />
      ))}
    </ol>
  )
}

export default TodosQuery
