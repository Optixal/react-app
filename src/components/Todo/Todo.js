import clsx from 'clsx'

function Todo({ todo, onChange }) {
  return (
    <li className="list-none text-left">
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
          className="checkbox my-auto mr-4"
        />
        <div
          className={clsx('mt-2', {
            'line-through': todo.completed,
          })}
        >
          <div className="leading-6">{todo.title}</div>
          <div className="mt-1 text-xs text-slate-400">
            By user {todo.userId}
          </div>
        </div>
      </div>
    </li>
  )
}

export default Todo
