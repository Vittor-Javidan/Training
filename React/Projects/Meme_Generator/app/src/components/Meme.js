import React from "react"

export default function Meme() {

   const [allMemes, setAllMemes] = React.useState([])
   const [font, setFont] = React.useState({ fontSize: 40 })
   const [meme, setMeme] = React.useState({
      updateState: true,
      randomImage: "http://i.imgflip.com/1bij.jpg",
      textCount: 1,
      memeText: []
   })
   const [inputElements, setInputElement] = React.useState([
      <input
         key={`key${meme.textCount}`}
         id={meme.textCount}
         type="text"
         placeholder="Top text"
         className="form--input"
         value={meme.memeText[meme.textCount - 1]}
         onChange={handleChange}
      />
   ])
   const [textElements, setTextElements] = React.useState([
      <div key={`teKey${meme.textCount}`} style={font} className="meme--text top" id={`textElement${meme.textCount}`}>
         {meme.memeText[meme.textCount - 1]}
      </div>
   ])

   function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prev => ({
         ...prev,
         randomImage: url
      }))
   }

   function handleChange(event) {

      const { id, value } = event.target
      meme.memeText[id - 1] = value
      document.getElementById(`textElement${id}`).innerText = value

      setMeme(prev => prev = {
         ...prev,
         updateState: !prev.updateState
      })
   }

   function newTextImput() {

      setMeme(prev => prev = {
         ...prev,
         textCount: prev.textCount + 1,
      })

      setInputElement(prev => [
         ...prev,
         <input
            key={`key${meme.textCount + 1}`}
            id={meme.textCount + 1}
            type="text"
            placeholder="Top text"
            className="form--input"
            value={meme.memeText[meme.textCount]}
            onChange={handleChange}
         />
      ])

      setTextElements(prev => [
         ...prev,
         <div
            key={`teKey${meme.textCount + 1}`}
            style={font} className="meme--text top"
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
         <input
            type="text"
            name="fontSize"
            placeholder={`Font size: ${font.fontSize}`}
            onChange={(event) => setFont(prevState => prevState = { fontSize: Number(event.target.value) })}
         >
         </input>
      </main>
   )
}