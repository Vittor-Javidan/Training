export default function handleDeleteElement(e, meme, setMeme) {

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
}