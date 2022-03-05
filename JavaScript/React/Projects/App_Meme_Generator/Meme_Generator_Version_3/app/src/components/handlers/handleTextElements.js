import Draggable from "react-draggable"

export default function handleTextElements(meme, setTextElements) {
   let textElementsArray = []
   for (let i = 1; i <= meme.memeText.length; i++) {
      textElementsArray[i - 1] = (
         <Draggable key={`Key${i}`}>
            <div
               className="meme--text top"
               id={`${i}`}
               style={{ fontSize: meme.textFont }}
            >
               {meme.memeText[i - 1]}
            </div>
         </Draggable>
      )
   }
   setTextElements(textElementsArray)
}