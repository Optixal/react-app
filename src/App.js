import logo from './logo.svg'
import './App.css'
import ExternalButton, {
  AnotherExternalButton,
} from './components/ExternalButton'
import AboutPage from './components/AboutPage'
import AdminPanel from './components/AdminPanel'
import { useState } from 'react'

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

        <article className="prose prose-invert">
          <h3>Components</h3>
          <MyButton />
          <ExternalButton />
          <AnotherExternalButton />

          <h3>Conditionals</h3>
          <button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
          <div>{loggedIn ? <AdminPanel /> : <AboutPage />}</div>
          <div>{loggedIn && <p>Hello admin.</p>}</div>

          <h3>Looping</h3>
          <ul>
            {products.map(product => (
              <li
                key={product.id}
                style={{ color: product.isFruit ? 'magenta' : 'darkgreen' }}
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
        </article>
      </header>
    </div>
  )
}

export default App
