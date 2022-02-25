import React from "react"
import Dice from "./Components/Dice"
import { nanoid } from "nanoid"

function generateNewDices(diceAmount) {
   const newDiceObjects = []
   for (let i = 1; i <= diceAmount; i++) {
      newDiceObjects.push({
         id: nanoid(),
         isSelected: false,
         value: (Math.ceil(Math.random() * 6))
      }
      )
   }
   return newDiceObjects
}

function rollDice(event, diceAmount, setDiceObjects) {
   event.stopPropagation()
   setDiceObjects(oldObjects => {
      const newDices = generateNewDices(diceAmount)
      for(let i = 0; i < oldObjects.length; i++){
         oldObjects[i].isSelected && (newDices[i] = oldObjects[i]) 
      }
      return newDices
   })
}

function toggleDice(setDiceObjects, id) {
   setDiceObjects(oldObjects => oldObjects.map(oldDice => {
      return oldDice.id === id
         ? {...oldDice, isSelected: !oldDice.isSelected}
         : oldDice
   }))
}

export default function App() {

   const [diceAmount, setDiceAmount] = React.useState(10)
   const [diceObjects, setDiceObjects] = React.useState(generateNewDices(diceAmount))

   const diceElements = diceObjects.map((dice) =>
      <Dice
         key={`elementKey_${dice.id}`}
         id={dice.id}
         isSelected={dice.isSelected}
         value={dice.value}
         toggleDice={toggleDice}
         setDiceObjects={setDiceObjects}
      />
   )

   //Console Feedback
   React.useEffect(() => {
      console.log(diceObjects)
   }, [diceObjects])

   return (
      <main>
         <h1 className="title" >Tenzies</h1>
         <p className="instructions">Roll until all dice are the same. Click each dice to freeze it as its current value between rolls</p>
         <div className="dice-container">
            {diceElements}
         </div>
         <button className="roll-dice"
            onClick={(event) => { rollDice(event, diceAmount, setDiceObjects) }}
         >
            Roll
         </button>
         <input
            placeholder={`Insert Dices Amount: ${diceAmount}`}
            onChange={(event) => {
               setDiceAmount(event.target.value)
            }}
         />
      </main>
   )
}

/*

*/