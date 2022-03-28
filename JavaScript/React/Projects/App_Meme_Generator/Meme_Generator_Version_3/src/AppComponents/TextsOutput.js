import { useContext } from "react"
import { AppContext } from "../App"
import Draggable from "react-draggable"

export default function TextsOutput() {

   const {texts, fontSize} = useContext(AppContext)

   return texts.map((text, index) => (
      <Draggable key={`Key${index}`}>
         <div
            className="meme--text top"
            id={index}
            style={{ fontSize: `${fontSize}px` }}
         >
            {text}
         </div>
      </Draggable>
   ))
}