import handleTextChange from "./handleTextChange"

export default function addInputElements (meme, setMeme, inputElements, setInputElement){

   setInputElement(prev => {

      return[
         ...prev,
         <input
            className="form--input"
            type="text"
            key={`key${inputElements.length + 1}`}
            id={inputElements.length + 1}
            placeholder={`Text ${inputElements.length + 1}`}
            value={meme.memeText[inputElements.length]}
            onChange={(e)=> handleTextChange(e, meme, setMeme)}
         />
      ]
   })
}