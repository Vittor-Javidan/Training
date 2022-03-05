import React from "react"

export default function Dice({ id, value, isSelected, toggleDice, setDiceObjects }) {

   const style = { backgroundColor: isSelected ? "green" : "white" }

   return (
      <div
         className="dice-face"
         style={style}
         onClick={()=> toggleDice(setDiceObjects, id)}
      >
         <h2 className="die-number">
            {value}
         </h2>
      </div>
   )
}
