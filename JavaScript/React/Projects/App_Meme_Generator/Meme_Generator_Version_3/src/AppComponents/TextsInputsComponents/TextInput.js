import { useContext } from "react"
import { AppContext } from "../../App"
import { TextsInputsContext } from "../TextsInputs"

export default function TextInput() {

   const { texts, setTexts } = useContext(AppContext)
   const { text, index } = useContext(TextsInputsContext)

   function TextChange(e) {

      const { id, value } = e.target
      let textArray = texts
      textArray[id] = value

      setTexts([...textArray])
   }

   return (
      <input
         className="form--input--text"
         type="text"
         id={index}
         placeholder={`Text ${index + 1}`}
         value={text}
         onChange={TextChange}
      />
   )
}