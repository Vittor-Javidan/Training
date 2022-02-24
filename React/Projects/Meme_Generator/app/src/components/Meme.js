import React from "react"
import Draggable from "react-draggable"


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

   function newText() {

      function handleTextChange(event) {

         const { id, value } = event.target
         let textArray = meme.memeText
         textArray[id - 1] = value
         setMeme(prev => prev = {
            ...prev,
            memeText: textArray
         })

         setTextElements(prev => {

            let elementsArray = [...prev]
            elementsArray[id - 1] = (
               <Draggable key={`teKey${id}`}>
                  <div
                     className="meme--text top"
                     id={`textElement${id}`}
                     style={{ fontSize: meme.textFont }}
                  >
                     {value}
                  </div>
               </Draggable>
            )

            return prev = elementsArray
         })
      }

      setMeme(prev => prev = {
         ...prev,
         textCount: prev.textCount + 1,
      })

      setInputElement(prev => [
         ...prev,
         <input
            className="form--input"
            type="text"
            key={`key${meme.textCount + 1}`}
            id={meme.textCount + 1}
            placeholder={`Text ${meme.textCount + 1}`}
            value={meme.memeText[meme.textCount]}
            onChange={handleTextChange}
         />
      ])

      setTextElements(prev => [
         ...prev,
         <Draggable key={`teKey${meme.textCount + 1}`}>
            <div
               className="meme--text top"
               id={`textElement${meme.textCount + 1}`}
               style={{ fontSize: meme.textFont }}
            >
               {meme.memeText[meme.textCount]}
            </div>
         </Draggable>
      ])
   }

   function newFontSize(event) {
      const { value } = event.target

      setMeme(prev => ({
         ...prev,
         textFont: [`${value}px`]
      }))
   }

   function getNewImage() {
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url

      setMeme(prev => ({
         ...prev,
         randomImage: url
      }))
   }

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
            onChange={newFontSize}
         />

         <div className="form">
            {inputElements}
            <button
               className="form--button"
               onClick={newText}
            >
               New Text
            </button>
            <button
               className="form--button"
               onClick={getNewImage}
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