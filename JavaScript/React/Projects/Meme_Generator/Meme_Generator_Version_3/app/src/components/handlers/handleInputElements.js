import handleTextChange from "./handleTextChange"
import handleDeleteElement from "./handleDeleteElement"

export default function handleInputElements(meme, setMeme, setInputElement){
   let inputElementsArray = []
   for (let i = 1; i <= meme.memeText.length; i++) {
      inputElementsArray[i - 1] = (
         <div className="form--input" key={`key${i}`}>
            <input
               className="form--input--text"
               type="text"
               id={i}
               placeholder={`Text ${i}`}
               value={meme.memeText[i - 1]}
               onChange={(e)=> handleTextChange(e, meme, setMeme)}
            />
            <button
               id={i}
               type="reset"
               className="form--input--delete-btn"
               onClick={(e)=> handleDeleteElement(e, meme, setMeme)}
            >
               <i className="form--input--gg-trash form--input--trash-icon" id={i}></i>
            </button>
         </div>
      )
   }
   setInputElement(inputElementsArray)
}