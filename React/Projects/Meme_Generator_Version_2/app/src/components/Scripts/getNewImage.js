export default function getNewImage(e, allMemes, setMeme) {

   e.stopPropagation()

   const randomNumber = Math.floor(Math.random() * allMemes.length)
   const url = allMemes[randomNumber].url

   setMeme(prev => ({
      ...prev,
      randomImage: url
   }))
}