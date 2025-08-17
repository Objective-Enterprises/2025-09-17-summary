import Hello from "./Hello"
import People from "./People"
import Count from "./Count"
import { useState } from 'react'

export default function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    console.log(username, password)
  }

  function handleReset() {
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <h1 id='heading'>App</h1>
      <p>Welcome to the app</p>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='username'
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <input
          placeholder='password'
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <div>
          <button>Login</button>
          <button type='button' onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
      <People />
      <Count />
    </>
  )
}
