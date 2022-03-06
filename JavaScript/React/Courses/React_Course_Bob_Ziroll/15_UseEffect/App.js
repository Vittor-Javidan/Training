import React from "react"

export default function App() {

   const [starWarsData, setStarWarsData] = React.useState({})
   const [count, setCount] = React.useState(1)

   React.useEffect(() => {

      fetch(`http://swapi.dev/api/people/${count}`)
         .then(res => res.json())
         .then(data => setStarWarsData(data))

      console.log("effect run")

   }, [count])

   console.log("component rendered")

   return (
      <div>

         <h2>The count is {count}</h2>
         <button
            onClick={() => { setCount(prevState => prevState + 1) }}
         >
            Get Next Character
         </button>
         <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
   )
}