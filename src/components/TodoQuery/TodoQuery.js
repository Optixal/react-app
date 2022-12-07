import clsx from 'clsx'

function TodoQuery({ todo, onChange }) {
  return (
    <li className="text-left list-none">
      <div className="flex">
        <p className="mr-3">{todo.id}</p>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={e => {
            onChange({
              ...todo,
              completed: e.target.checked,
            })
          }}
          className="mr-4 h-4 w-4 my-auto"
        />
        <div
          className={clsx('mt-2', {
            'line-through': todo.completed,
          })}
        >
          <div>{todo.title}</div>
          <div className="text-xs text-slate-400">By user {todo.userId}</div>
        </div>
      </div>
    </li>
  )
}

export default TodoQuery
