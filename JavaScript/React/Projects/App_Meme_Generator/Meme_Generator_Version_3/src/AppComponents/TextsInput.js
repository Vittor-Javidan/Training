import { useContext } from "react"
import { AppContext } from "../App"

export default function TextsInput(){

   const {texts, setTexts} = useContext(AppContext)

   function TextChange(e) {

      const { id, value } = e.target
      let textArray = texts
      textArray[id] = value
   
      setTexts([...textArray])
   }

   function deleteInput(e) {
      e.stopPropagation()
   
      const id = Number(e.target.id)
      let textArray = []
      if(id + 1 === texts.length){
         for(let i = 0; i < texts.length; i++){
            if(i !== id){
               textArray.push(texts[i])
               
            }
         }
      } else {
         textArray = texts
         textArray[id] = ""
      }
   
      setTexts([...textArray])
   }

   return texts.map((text, index) => (
      <div className="form--input" key={`key${index}`}>
         <input
            className="form--input--text"
            type="text"
            id={index}
            placeholder={`Text ${index + 1}`}
            value={text}
            onChange={TextChange}
         />
         <button
            id={index}
            type="reset"
            className="form--input--delete-btn"
            onClick={deleteInput}
         >
            <i className="form--input--gg-trash form--input--trash-icon" id={index}></i>
         </button>
      </div>
   ))
}