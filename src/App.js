import logo from './logo.svg'
import './App.css'
import ExternalButton, {
  AnotherExternalButton,
} from './components/ExternalButton'
import AboutPage from './components/AboutPage'
import AdminPanel from './components/AdminPanel'

function MyButton() {
  return <button>Same file button!</button>
}

function App() {
  let isLoggedIn = true
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ]

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
        <MyButton />
        <ExternalButton />
        <AnotherExternalButton />
        <div>{isLoggedIn ? <AdminPanel /> : <AboutPage />}</div>
        <div>{isLoggedIn && <AdminPanel />}</div>
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
      </header>
    </div>
  )
}

export default App
