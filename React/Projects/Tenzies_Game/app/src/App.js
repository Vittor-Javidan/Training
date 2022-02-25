import React from "react"
import Dice from "./Components/Dice"
import {nanoid} from "nanoid"

function newDiceNumbers(dieAmount) {

   const newDiceObjectArray = []
   for (let i = 1; i <= dieAmount; i++) {
      newDiceObjectArray.push(
         {
            id: nanoid(),
            isSelected: false,
            value: (Math.ceil(Math.random() * 6))
         }
      )
   }
   return newDiceObjectArray
}

function updateDiceObjects(
   event,
   diceAmount,
   setDiceNumbersObject
) {
   event.stopPropagation()

   const newDiceObjectArray = newDiceNumbers(diceAmount)
   setDiceNumbersObject(newDiceObjectArray.map(oldObject => oldObject = {
      ...oldObject,
      value: oldObject.value,
      isSelected: oldObject.isSelected ? oldObject.isSelected : false
   }))
   console.log("dice updated")
}

export default function App() {

   const [diceAmount, setDiceAmount] = React.useState(10)
   const [diceNumbersObject, setDiceNumbersObject] = React.useState(newDiceNumbers(diceAmount))

   //Console Feedback
   React.useEffect(() => {
      console.log(diceNumbersObject)
   }, [diceNumbersObject])

   return (
      <main>
         <div className="dice-container">
            <Dice diceNumbersObject={diceNumbersObject} />
         </div>
         <button
            className="roll-dice"
            onClick={(event) => {
               updateDiceObjects(
                  event,
                  diceAmount,
                  setDiceNumbersObject
               )
            }}
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