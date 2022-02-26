import React from "react"
import handleTextElements from "./Scripts/handleTextElements"

export default function OutputText({meme}) {

   const [textElements, setTextElements] = React.useState([])

   React.useEffect(()=>{
      handleTextElements(meme, setTextElements)
   }, [meme])

   return (
      <div
         className="meme"
      >
         <img src={meme.randomImage} className="meme--image" alt="" />
         {textElements}
      </div>
   )
}