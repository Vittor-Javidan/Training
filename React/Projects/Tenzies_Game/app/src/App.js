import React from "react"
import Dice from "./Components/Dice"
import { nanoid } from "nanoid"

function newDiceNumbers(diceAmount) {
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

function rollDice(event, setDiceObjects, diceAmount) {
   event.stopPropagation()
   setDiceObjects(newDiceNumbers(diceAmount))
}

export default function App() {

   const [diceAmount, setDiceAmount] = React.useState(10)
   const [diceObjects, setDiceObjects] = React.useState(newDiceNumbers(diceAmount))

   const diceElements = diceObjects.map((diceNumber) =>
      <Dice
         key={`elementKey_${diceNumber.id}`}
         isSelected={diceNumber.isSelected}
         value={diceNumber.value}
      />
   )

   //Console Feedback
   React.useEffect(() => {
      console.log(diceObjects)
   }, [diceObjects])

   return (
      <main>
         <div className="dice-container">
            {diceElements}
         </div>
         <button className="roll-dice"
            onClick={(event)=>{rollDice(event, setDiceObjects, diceAmount)}}
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