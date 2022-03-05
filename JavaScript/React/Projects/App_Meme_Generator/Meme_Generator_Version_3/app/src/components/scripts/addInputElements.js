export default function addInputElements(e, meme, setMeme) {

   e.stopPropagation()

   setMeme(prev => prev = {
      ...prev,
      memeText: [...meme.memeText, ""]
   })
}