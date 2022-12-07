import { useEffect, useReducer } from 'react'
import Todo from './Todo'

function todosReducer(todos, action) {
  switch (action.type) {
    case 'add': {
      action.todos.splice(action.limit)
      return [...todos, ...action.todos]
    }
    case 'modify': {
      return todos.map(todo => {
        if (todo.id === action.todo.id) {
          return action.todo
        } else {
          return todo
        }
      })
    }
    default: {
      throw Error('Unknown action: ' + action.type)
    }
  }
}

async function fetchTodos() {
  const req = await fetch('https://jsonplaceholder.typicode.com/todos')
  return await req.json()
}

function Todos() {
  const [todos, dispatch] = useReducer(todosReducer, [])

  useEffect(() => {
    let ignore = false

    async function startFetching() {
      const json = await fetchTodos()
      if (!ignore) {
        dispatch({
          type: 'add',
          todos: json,
          limit: 5,
        })
      }
    }

    startFetching()

    return () => {
      ignore = true
    }
  }, [])

  function handleChangeTodo(todo) {
    dispatch({
      type: 'modify',
      todo: todo,
    })
  }

  return (
    <ol>
      {todos.map(todo => (
        <Todo todo={todo} onChange={handleChangeTodo} key={todo.id} />
      ))}
    </ol>
  )
}

export default Todos
