export default function handleTextChange(e, meme, setMeme) {

   e.stopPropagation()

   const { id, value } = e.target
   let textArray = meme.memeText
   textArray[id - 1] = value

   setMeme(prev => prev = {
      ...prev,
      memeText: textArray
   })
}