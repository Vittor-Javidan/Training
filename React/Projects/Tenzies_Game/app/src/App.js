import React from "react"
import Dice from "./Components/Dice"

function allNewDiceNumber(dieAmount) {

   const newDiceArray = []
   for (let i = 1; i <= dieAmount; i++) {
      newDiceArray.push((Math.ceil(Math.random() * 6)))
   }
   return newDiceArray
}

function updateDiceObjects(
   event,
   diceAmount,
   setNumbersArray,
   setDiceNumbersObject
) {
   event.stopPropagation()

   const newNumbersArray = allNewDiceNumber(diceAmount)
   setNumbersArray(newNumbersArray)
   setDiceNumbersObject((oldObject) => newNumbersArray.map((number) => {
      return {
         value: number,
         isSelected: oldObject.isSelected ? oldObject.isSelected : false
      }
   }))
   console.log("dice updated")
}

export default function App() {

   const [diceAmount, setDiceAmount] = React.useState(10)
   const [diceNumbersArray, setNumbersArray] = React.useState(allNewDiceNumber(diceAmount))
   const [diceNumbersObject, setDiceNumbersObject] = React.useState(diceNumbersArray.map((number) => {
      return {
         value: number,
         isSelected: false
      }
   }))

   //Console Feedback
   React.useEffect(() => {
      console.log(diceNumbersArray)
      console.log(diceNumbersObject)
   }, [diceNumbersArray, diceNumbersObject])

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
                  setNumbersArray,
                  setDiceNumbersObject
               )
            }}
         >
            Roll
         </button>
         <input 
            placeholder={`Insert Dices Amount: ${diceAmount}`}
            onChange={(event)=>{
               setDiceAmount(event.target.value)
            }}
         />
      </main>
   )
}