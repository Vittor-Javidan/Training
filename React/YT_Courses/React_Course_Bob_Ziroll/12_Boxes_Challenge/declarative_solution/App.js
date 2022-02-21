import React from 'react'
import boxes from "./boxes"
import Box from './components/Box'

export default function App() {

   const [squares, setSquares] = React.useState(boxes)

   function toggle(id) {

      setSquares((prevSquares) => {

         prevSquares = prevSquares.map((square) => {

            square = square.id === id
               ? { ...square, on: !square.on }
               : square

            return square
         })

         return prevSquares
      })
   }

   const squareElements = squares.map(square => (
      <Box
         key={square.id}
         on={square.on}
         toggle={() => toggle(square.id)}
      />
   ))

   return (
      <main>
         {squareElements}
      </main>
   )
}