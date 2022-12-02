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
      </header>
    </div>
  )
}

export default App
