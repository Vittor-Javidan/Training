import React from "react"

//Scripts
import newText from "./Scripts/newText"
import getNewImage from "./Scripts/getNewImage"
import newFontSize from "./Scripts/newFontSize"

//Component
export default function Meme() {

   const [allMemes, setAllMemes] = React.useState([])
   const [meme, setMeme] = React.useState({
      updateState: true,
      randomImage: "http://i.imgflip.com/1bij.jpg",
      textCount: 0,
      memeText: [],
      textFont: `${40}px`
   })

   const [inputElements, setInputElement] = React.useState([])
   const [textElements, setTextElements] = React.useState([])

   React.useEffect(() => {

      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))

   }, [])
   
   return (
      <main>

         <input
            type="text"
            placeholder={`Next New Text Font: ${meme.textFont}`}
            onChange={(e)=> newFontSize(e, setMeme)}
         />

         <div className="form">
            {inputElements}
            <button
               className="form--button"
               onClick={(e)=> newText(e, meme, setMeme, setTextElements, setInputElement)}
            >
               New Text
            </button>
            <button
               className="form--button"
               onClick={(e)=> getNewImage(e, allMemes, setMeme)}
            >
               Get a new meme image 🖼️
            </button>
         </div>

         <div
            className="meme"
         >
            <img src={meme.randomImage} className="meme--image" alt="" />
            {textElements}
         </div>

      </main>
   )
}

/*
   React.useEffect(() => {
      console.log(meme.memeText)
      console.log(`${meme.textCount} ${meme.randomImage} ${meme.textFont}`)
   }, [meme])
*/