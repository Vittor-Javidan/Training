import { useContext } from "react"
import { AppContext } from "../App"

import TextInput from "./TextsInputsComponents/TextInput"
import DeleteButton from "./TextsInputsComponents/DeleteButton"

export default function TextsInputs(){

   const {texts} = useContext(AppContext)

   return texts.map((text, index) => (
      
      <div className="form--input" key={`key${index}`}>

         <TextInput text={text} index={index} />
         <DeleteButton index={index} />

      </div>
   ))
}