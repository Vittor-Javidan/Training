import Draggable from "react-draggable"

export default function handleTextChange(e, meme, setMeme, setTextElements) {

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