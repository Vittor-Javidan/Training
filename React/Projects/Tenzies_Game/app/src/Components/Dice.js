import React from "react"

export default function Dice({diceNumbersObject}) {

   const diceElements = diceNumbersObject.map(diceNumber => (

      <div className="die-face">
         <h2 className="die-number">
            {diceNumber.value}
         </h2>
      </div>
   ))

   return diceElements
}