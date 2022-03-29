import { useContext } from "react"
import { AppContext } from "../../App"

export default function TextInput ({text, index}){

    const {texts, setTexts} = useContext(AppContext)
 
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