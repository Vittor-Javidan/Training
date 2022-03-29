import { useContext } from "react"
import { AppContext } from "../../App"

export default function DeleteButton({index}) {

    const {texts, setTexts} = useContext(AppContext)
 
    function deleteInput(e) {
       e.stopPropagation()
    
       const id = Number(e.target.id)
       let textArray = []
       if(id + 1 === texts.length){
          textArray = texts.filter((text, index) => index !== id)
       } else {
          textArray = texts
          textArray[id] = ""
       }
    
       setTexts([...textArray])
    }
 
    return (
       <button
          id={index}
          type="reset"
          className="form--input--delete-btn"
          onClick={deleteInput}
       >
          <i className="form--input--gg-trash form--input--trash-icon" id={index}></i>
       </button>
    )
 }