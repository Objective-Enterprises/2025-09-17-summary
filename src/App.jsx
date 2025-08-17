import Hello from "./Hello"

export default function App () {
  return (
    <>
      <h1 id='heading'>App</h1>
      <p>Welcome to the app</p>
      <Hello person='Zelda' greeting='Hello' />
      <Hello person='Dorothy' greeting='Hi' />
      <Hello person='Tallulah' greeting='Wassup' />
    </>
  )
}
