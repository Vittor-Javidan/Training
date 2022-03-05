import React from "react"
import InputText from "./InputText"
import OutputText from "./OutputText"

export default function Meme() {

   const [allMemes, setAllMemes] = React.useState([])
   const [meme, setMeme] = React.useState(()=>{
      return {
         randomImage: "http://i.imgflip.com/1bij.jpg",
         memeText: [],
         textFont: `${40}px`
      }
   })

   React.useEffect(() => {
      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
   }, [])

   React.useEffect(()=>{
      console.log(meme.memeText)
      console.log(`${meme.randomImage} ${meme.textFont}`)
   }, [allMemes, meme])

   return (
      <main>
         <InputText 
            allMemes={allMemes}
            meme={meme} 
            setMeme={setMeme}
         />
         <OutputText meme={meme}/>
      </main>
   )
}