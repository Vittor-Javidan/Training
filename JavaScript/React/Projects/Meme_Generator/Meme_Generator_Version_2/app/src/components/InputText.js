import React from "react"
import getNewImage from "./Scripts/getNewImage"
import addInputElements from "./Scripts/addInputElements"
import handleFontChange from "./Scripts/handleFontChange"

export default function InputText({allMemes, meme, setMeme}) {

   const [inputElements, setInputElement] = React.useState([])

   React.useEffect(()=>{
   }, [meme])

   return (
      <div>
         <input
            type="text"
            placeholder={`Next New Text Font: ${meme.textFont}`}
            onChange={(e) => handleFontChange(e, setMeme)}
         />

         <div className="form">
            {inputElements}
            <button
               className="form--button"
               onClick={(e) => addInputElements(meme, setMeme, inputElements, setInputElement)}
            >
               New Text
            </button>
            <button
               className="form--button"
               onClick={(e) => getNewImage(e, allMemes, setMeme)}
            >
               Get a new meme image 🖼️
            </button>
         </div>
      </div>
   )
}