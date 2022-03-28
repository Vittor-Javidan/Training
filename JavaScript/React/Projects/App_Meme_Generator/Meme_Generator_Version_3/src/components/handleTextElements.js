import Draggable from "react-draggable"

export default function HandleTextElements({meme, fontSize}) {

   let textElementsArray = []
   for (let i = 1; i <= meme.memeText.length; i++) {
      textElementsArray[i - 1] = (
         <Draggable key={`Key${i}`}>
            <div
               className="meme--text top"
               id={`${i}`}
               style={{ fontSize: `${fontSize}px` }}
            >
               {meme.memeText[i - 1]}
            </div>
         </Draggable>
      )
   }

   return textElementsArray
}