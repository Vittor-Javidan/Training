import React from 'react'
import boxes from "./boxes"
import Box from './components/Box'

export default function App(props) {

   const [squares, setSquares] = React.useState(boxes)

   function toggle(id) {

      setSquares(prevSquares => {

         const newSquares = []

         for (let i = 0; i < prevSquares.length; i++) {

            const currentSquare = prevSquares[i]

            if (currentSquare.id === id) {

               const updatedSquare = {
                  ...currentSquare,
                  on: !currentSquare.on
               }
               newSquares.push(updatedSquare)

            } else {

               newSquares.push(currentSquare)
            }
         }

         return newSquares
      })

   }

   const squareElements = squares.map(square => (
      <Box
         key={square.id}
         id={square.id}
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