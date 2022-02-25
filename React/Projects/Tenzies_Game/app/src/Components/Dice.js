import React from "react"

export default function Dice({ diceNumbersObject }) {

   const diceElements = diceNumbersObject.map(diceNumber => (

      <div
         key={`elementKey_${diceNumber.id}`}
         className="die-face"
      >
         <h2
            className="die-number"
         >
            {diceNumber.value}
         </h2>
      </div>
   ))
   
   return diceElements
}