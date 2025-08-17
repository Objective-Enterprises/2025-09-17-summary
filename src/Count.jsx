import { useState } from 'react'

export default function Count() {
  const [count, setCount] = useState(5) // count = 5

  return (
    <button
      onClick={() => {
        console.log('click')
        // count += 1
        setCount(count + 1)
        console.log('count', count)
      }}
    >
      Click {count}
    </button>
  )
}
