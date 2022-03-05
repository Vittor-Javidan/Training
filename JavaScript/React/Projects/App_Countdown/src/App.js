import React, { useEffect } from "react";

export default function App() {

   const [secondsAmount, setSecondsAmount] = React.useState(1 * 60 - 55) //25 minutes

   const minutes = Math.floor(secondsAmount / 60)
   const seconds = secondsAmount % 60

   useEffect(() => {

      secondsAmount > 0 && setTimeout(() => {
         setSecondsAmount(prevState => prevState - 1)
      }, 1000)

   }, [secondsAmount])

   return (
      <div>
         <span>{String(minutes).padStart(2, '0')}</span>
         <span>:</span>
         <span>{String(seconds).padStart(2, '0')}</span>
         <br />
         {secondsAmount === 0 && <h1>Times end!!</h1>}
      </div>
   )
}

/* String(seconds).padEnd(2, '0')

   padStart() :  
      firstArgument: How many characters you want the string "seconds" to have. In this case, 2 characthers
      secondArgument: If the string "seconds" has less than 2 characthers, which characther you want to
      fill it in the start (or in the left) of the string.
*/