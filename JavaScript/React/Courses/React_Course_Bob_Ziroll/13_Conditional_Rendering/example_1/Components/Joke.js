import React from "react"

function Joke({setup, punchline}){

   const [isShown, setIsShown] = React.useState(false)

   function toggleShown(){
      setIsShown(prevState => !prevState)
   }

   return (
      <div>
         {setup && <h3>{setup}</h3>}
         {isShown && <p>{punchline}</p>}
         <button onClick={toggleShown} >
            {!isShown ? `Show punchline` : `Hide punchline`}
         </button>
         <hr/>
      </div>
   )
}

export default Joke