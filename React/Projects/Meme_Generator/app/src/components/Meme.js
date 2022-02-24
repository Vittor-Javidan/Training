import React from "react"

export default function Meme() {

   const [allMemes, setAllMemes] = React.useState([])
   const [meme, setMeme] = React.useState({
      updateState: true,
      randomImage: "http://i.imgflip.com/1bij.jpg",
      textCount: 0,
      memeText: []
   })

   const [inputElements, setInputElement] = React.useState([])
   const [textElements, setTextElements] = React.useState([])

   function handleChange(event) {

      const { id, value, name } = event.target
      meme.memeText[id - 1] = value
      document.getElementById(`textElement${id}`).innerText = value

      setMeme(prev => prev = {
         ...prev,
         updateState: !prev.updateState
      })
   }
   function getMemeImage() {

      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url

      setMeme(prev => ({
         ...prev,
         randomImage: url
      }))
   }
   function newTextImput() {

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
            onChange={handleChange}
         />
      ])

      setTextElements(prev => [
         ...prev,
         <div
            className="meme--text top"
            key={`teKey${meme.textCount + 1}`}
            id={`textElement${meme.textCount + 1}`}        
         >
            {meme.memeText[meme.textCount]}
         </div>
      ])
   }

   React.useEffect(() => {

      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))

   }, [])
   React.useEffect(() => {
      console.log(meme.memeText)
      console.log(meme.textCount)
      console.log(meme.randomImage)
   }, [meme])

   return (
      <main>

         <div className="form">
            {inputElements}
            <button
               className="form--button"
               onClick={newTextImput}
            >
               New Text
            </button>
            <button
               className="form--button"
               onClick={getMemeImage}
            >
               Get a new meme image 🖼️
            </button>
         </div>

         <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt="" />
            {textElements}
         </div>

      </main>
   )
}