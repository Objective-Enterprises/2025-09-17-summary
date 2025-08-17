import Hello from "./Hello"

export default function People () {
  const people = [
    { person: 'Zelda', greeting: 'Hello' },
    { person: 'Dorothy', greeting: 'Hi', },
    { person: 'Tallulah', greeting: 'Wassup' },
    { person: 'Dorothy', greeting: 'Hello', },
  ]
  const greetings = people.map((element, index) => {
    return (
      <Hello key={index} person={element.person} greeting={element.greeting} />
    )
  })
  return (
    <>
      {greetings}
    </>
  )
}
