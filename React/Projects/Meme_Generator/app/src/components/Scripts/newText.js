import Draggable from "react-draggable"
import handleTextChange from "./handleTextChange"

export default function newText(e, meme, setMeme, setTextElements, setInputElement) {

   e.stopPropagation()

   setMeme(prev => prev = {
      ...prev,
      textCount: prev.textCount + 1,
   })

   setInputElement(prev => [
      ...prev,
      <input
         className="form--input"
         type="text"
         key={`key${meme.textCount + 1}`}
         id={meme.textCount + 1}
         placeholder={`Text ${meme.textCount + 1}`}
         value={meme.memeText[meme.textCount]}
         onChange={(e)=> handleTextChange(e, meme, setMeme, setTextElements)}
      />
   ])

   setTextElements(prev => [
      ...prev,
      <Draggable key={`teKey${meme.textCount + 1}`}>
         <div
            className="meme--text top"
            id={`textElement${meme.textCount + 1}`}
            style={{ fontSize: meme.textFont }}
         >
            {meme.memeText[meme.textCount]}
         </div>
      </Draggable>
   ])
}