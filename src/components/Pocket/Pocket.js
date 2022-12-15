import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { auth, listPosts, pb } from '../../pocketbase/pb'
import Post from './Post'

function Pocket() {
  // State

  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: listPosts,
  })
  const [loggedIn, setLoggedIn] = useState(pb.authStore.isValid)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Functions/Actions

  async function login(event) {
    event.preventDefault()
    const loginPromise = auth(username, password)
    toast.promise(loginPromise, {
      pending: 'Logging in...',
      success: {
        render() {
          return `Welcome back, ${pb.authStore.model.name}`
        },
      },
      error: 'Invalid username or password',
    })
    await loginPromise
    if (pb.authStore.isValid) {
      setUsername('')
      setPassword('')
      setLoggedIn(true)
      refetch()
    }
  }

  function logout() {
    pb.authStore.clear()
    setLoggedIn(false)
    refetch()
  }

  // View/Looks

  if (error) {
    return <p>Encountered errors 💀</p>
  } else if (isLoading) {
    return <p>Loading.. ⏳</p>
  }

  const posts = data?.map(record => <Post record={record} key={record.id} />)

  const loginLogout = loggedIn ? (
    <button onClick={logout}>Logout</button>
  ) : (
    <form className="form-control w-full" onSubmit={login}>
      <div className="flex flex-row gap-4">
        <div className="flex-1">
          <label className="label">
            <span className="label-text">Username or email</span>
          </label>
          <input
            type="text"
            className="input-bordered input mb-4 w-full"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="flex-1">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            className="input-bordered input mb-4 w-full"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <input className="btn" type="submit" />
    </form>
  )

  return (
    <div>
      {loginLogout}
      <p>{pb.authStore.isValid}</p>
      <div>{posts}</div>
    </div>
  )
}

export default Pocket
