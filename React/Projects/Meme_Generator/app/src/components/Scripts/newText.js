import Draggable from "react-draggable"

export default function newText(e, meme, setMeme, setTextElements, setInputElement) {
         
   function handleTextChange(e) {

      e.stopPropagation()

      const { id, value } = e.target
      let textArray = meme.memeText
      textArray[id - 1] = value
      setMeme(prev => prev = {
         ...prev,
         memeText: textArray
      })

      setTextElements(prev => {

         let elementsArray = [...prev]
         elementsArray[id - 1] = (
            <Draggable key={`teKey${id}`}>
               <div
                  className="meme--text top"
                  id={`textElement${id}`}
                  style={{ fontSize: meme.textFont }}
               >
                  {value}
               </div>
            </Draggable>
         )

         return prev = elementsArray
      })
   }

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
         onChange={handleTextChange}
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