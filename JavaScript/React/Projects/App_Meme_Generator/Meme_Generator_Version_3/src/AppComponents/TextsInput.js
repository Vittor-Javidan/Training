import { useContext } from "react"
import { AppContext } from "../App"

export default function TextsInput(){

   const {texts, setTexts} = useContext(AppContext)

   let inputElementsArray = []
   for (let i = 1; i <= texts.length; i++) {
      inputElementsArray[i - 1] = (
         <div className="form--input" key={`key${i}`}>
            <input
               className="form--input--text"
               type="text"
               id={i}
               placeholder={`Text ${i}`}
               value={texts[i - 1]}
               onChange={(e)=> {
                  e.stopPropagation()

                  const { id, value } = e.target
                  let textArray = texts
                  textArray[Number(id) - 1] = value
               
                  setTexts([...textArray])
               }}
            />
            <button
               id={i}
               type="reset"
               className="form--input--delete-btn"
               onClick={(e)=> {
                  e.stopPropagation()
   
                  const id = Number(e.target.id)
                  let textArray = []
                  if(id === texts.length){
                     for(let i = 0; i < texts.length; i++){
                        if(i !== id - 1){
                           textArray.push(texts[i])
                           
                        }
                     }
                  } else {
                     textArray = texts
                     textArray[id - 1] = ""
                  }
               
                  setTexts([...textArray])
               }}
            >
               <i className="form--input--gg-trash form--input--trash-icon" id={i}></i>
            </button>
         </div>
      )
   }
   return inputElementsArray
}