import React from "react"
import InputText from "./InputText"
import OutputText from "./OutputText"

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

   React.useEffect(() => {
      console.log(meme.memeText)
      console.log(`${meme.textCount} ${meme.randomImage} ${meme.textFont}`)
   }, [meme])

   return (
      <main>

         <input
            type="text"
            placeholder={`Next New Text Font: ${meme.textFont}`}
            onChange={(e)=> newFontSize(e, setMeme)}
         />

         <div className="form">
            <InputText inputElements={inputElements}/>
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
            <OutputText textElements={textElements}/>
         </div>

      </main>
   )
}

/*

*/