export default function HandleInputElements({meme, setMeme}){
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
               onChange={(e)=> {
                  e.stopPropagation()

                  const { id, value } = e.target
                  let textArray = meme.memeText
                  textArray[id - 1] = value
               
                  setMeme(prev => prev = {
                     ...prev,
                     memeText: textArray
                  })
               }}
            />
            <button
               id={i}
               type="reset"
               className="form--input--delete-btn"
               onClick={(e)=> {
                  e.stopPropagation()
   
                  const id = Number(e.target.id)
                  let textArray = []
                  if(id === meme.memeText.length){
                     for(let i = 0; i < meme.memeText.length; i++){
                        if(i !== id - 1){
                           textArray.push(meme.memeText[i])
                           
                        }
                     }
                  } else {
                     textArray = meme.memeText
                     textArray[id - 1] = ""
                  }
               
                  setMeme(prev => prev = {
                     ...prev,
                     memeText: textArray
                  })
               }}
            >
               <i className="form--input--gg-trash form--input--trash-icon" id={i}></i>
            </button>
         </div>
      )
   }
   return inputElementsArray
}