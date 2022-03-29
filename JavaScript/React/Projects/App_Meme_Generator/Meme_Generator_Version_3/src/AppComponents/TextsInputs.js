import { useContext, createContext } from "react"
import { AppContext } from "../App"

import TextInput from "./TextsInputsComponents/TextInput"
import DeleteButton from "./TextsInputsComponents/DeleteButton"

export const TextsInputsContext = createContext()

export default function TextsInputs(){

   const {texts} = useContext(AppContext)

   return texts.map((text, index) => {

      const props = {
         text, index
      }
   
      return (
         <div className="form--input" key={`key${index}`}>
            <TextsInputsContext.Provider value={props}>
               <TextInput />
               <DeleteButton />
            </TextsInputsContext.Provider>
         </div>
      )
   })
}