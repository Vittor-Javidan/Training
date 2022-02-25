import React from "react"

export default function Dice({ value,  isSelected}) {

   const style = {backgroundColor: isSelected ? "green" : "white" }

   return (
      <div className="dice-face" style={style}>
         <h2 className="die-number">
            {value}
         </h2>
      </div>
   )
}
