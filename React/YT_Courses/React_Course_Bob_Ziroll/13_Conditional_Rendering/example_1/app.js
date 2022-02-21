import React from "react"
import Joke from "./Components/Joke"
import jokesData from "./jokesData"

function App(props) {

   const [jokesArray, setJokesArray] = React.useState(jokesData)

   const jokesComponents = jokesArray.map((joke) => {
      return(
         <Joke
            key={joke.id}
            setup={joke.setup}
            punchline={joke.punchline}
            isPun={joke.isPun}
         />
      )
   })

   return (
      <div>
         {jokesComponents}
      </div>
   )
}

export default App