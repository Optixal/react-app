import clsx from 'clsx'
import { useState } from 'react'
import './App.css'
import AboutPage from './components/AboutPage'
import AdminPanel from './components/AdminPanel'
import ExternalButton, {
  AnotherExternalButton,
} from './components/ExternalButton'
import FilterableProductTable from './components/ProductTable/FilterableProductTable'
import ThemeToggle from './components/ThemeToggle'
import Todos from './components/Todo/Todos'
import TodosQuery from './components/Todo/TodosQuery'
import logo from './logo.svg'

const themes = {
  light: ['light', 'lofi', 'cupcake', 'winter', 'cyberpunk'],
  dark: ['dark', 'dracula', 'synthwave', 'halloween', 'night'],
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

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

  const [dark, setDark] = useState(true)
  const [theme, setTheme] = useState(pickRandom(themes.dark))
  function toggleDark() {
    if (dark) {
      setTheme(pickRandom(themes.light))
    } else {
      setTheme(pickRandom(themes.dark))
    }
    setDark(!dark)
  }

  return (
    <div className="text-center transition-all duration-200" data-theme={theme}>
      <header className="flex min-h-screen flex-col items-center justify-center text-2xl">
        <img
          src={logo}
          className="h-[40vmin] animate-[spin_20s_linear_infinite]"
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="link-accent"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React @
        </a>
      </header>

      <hr className="my-12 border-2 border-base-200" />

      <article className="prose mx-auto py-12">
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

      <hr className="border-2 border-base-200" />

      <div className="prose max-w-none py-12">
        <h3>PocketBase</h3>
      </div>

      <ThemeToggle
        dark={dark}
        theme={theme}
        onChange={toggleDark}
      ></ThemeToggle>
    </div>
  )
}

export default App
