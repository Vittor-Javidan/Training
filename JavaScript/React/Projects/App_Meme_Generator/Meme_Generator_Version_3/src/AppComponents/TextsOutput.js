import { useContext } from "react"
import { AppContext } from "../App"
import Draggable from "react-draggable"

export default function TextsOutput() {

   const {texts, fontSize} = useContext(AppContext)

   let textElementsArray = []
   for (let i = 0; i < texts.length; i++) {
      textElementsArray[i] = (
         <Draggable key={`Key${i}`}>
            <div
               className="meme--text top"
               id={i}
               style={{ fontSize: `${fontSize}px` }}
            >
               {texts[i]}
            </div>
         </Draggable>
      )
   }

   return textElementsArray
}