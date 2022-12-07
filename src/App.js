import clsx from 'clsx'
import { useState } from 'react'
import './App.css'
import AboutPage from './components/AboutPage'
import AdminPanel from './components/AdminPanel'
import ExternalButton, {
  AnotherExternalButton,
} from './components/ExternalButton'
import FilterableProductTable from './components/ProductTable/FilterableProductTable'
import Todos from './components/Todo/Todos'
import TodosQuery from './components/TodoQuery/TodosQuery'
import logo from './logo.svg'

function MyButton() {
  return <button>Same file button!</button>
}

function ReactiveButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return <button onClick={handleClick}>Clicked {count} times</button>
}

function ReactiveButtonWithProps({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>
}

function App() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ]

  const PRODUCTS = [
    { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
    { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
    { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
    { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
    { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
    { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
  ]

  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  const [loggedIn, setLoggedIn] = useState(false)
  function handleLogin() {
    setLoggedIn(!loggedIn)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @
        </a>

        <article className="prose-invert prose">
          <h3>Components</h3>
          <MyButton />
          <ExternalButton />
          <AnotherExternalButton />

          <h3>Conditionals</h3>
          <button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
          <hr />
          <div>{loggedIn ? <AdminPanel /> : <AboutPage />}</div>
          <div>{loggedIn && <p>Hello admin.</p>}</div>
          <hr />

          <h3>Looping</h3>
          <ul>
            {products.map(product => (
              <li
                key={product.id}
                className={clsx({
                  'text-green-300': product.isFruit,
                  'text-purple-300': !product.isFruit,
                })}
              >
                {product.title}
              </li>
            ))}
          </ul>

          <h3>Reactive buttons</h3>
          <ReactiveButton />
          <ReactiveButton />

          <h3>Sharing data between components</h3>
          <ReactiveButtonWithProps count={count} onClick={handleClick} />
          <ReactiveButtonWithProps count={count} onClick={handleClick} />

          <h3>Product table</h3>
          <FilterableProductTable products={PRODUCTS} />

          <h3>Fetch data</h3>
          <Todos />

          <h3>
            Fetch data with TanStack Query{' '}
            <span className="text-sm">(200ms delay on updates)</span>
          </h3>
          <TodosQuery />

          <h3>daisyUI</h3>
          <button className="btn">Button</button>
          <input
            type="checkbox"
            className="checkbox-primary checkbox mx-auto mt-4 block"
          />
          <input type="checkbox" className="toggle-secondary toggle mt-4" />
        </article>
      </header>
    </div>
  )
}

export default App
