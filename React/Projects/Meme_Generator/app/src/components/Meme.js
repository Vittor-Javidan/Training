import React from "react"

export default function Meme() {

   const [allMemes, setAllMemes] = React.useState([])
   const [font, setFont] = React.useState({ fontSize: 40 })
   const [meme, setMeme] = React.useState({
      randomImage: "http://i.imgflip.com/1bij.jpg",
      textCount: 1,
      memeText: {
         text1: ""
      }
   })

   function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prev => ({
         ...prev,
         randomImage: url
      }))
   }

   function handleChange(event) {

      const { name, value } = event.target

      setMeme(prev => prev = {
         ...prev,
         memeText:{
            ...prev.memeText,
            [name]: value
         }
      })
   }

   function newTextImput(){

      const name = `text${meme.textCount + 1}`

      setMeme(prev => prev = {
         ...prev,
         textCount: prev.textCount + 1,
         memeText:{
            ...prev.memeText,
            [name]: ""
         }
      })
   }

   React.useEffect(() => {

      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))

   }, [])

   React.useEffect(() => {
      console.log(meme)
   }, [meme])

   return (
      <main>
         <div className="form">
            <input
               type="text"
               placeholder="Top text"
               className="form--input"
               name="text1"
               value={meme.memeText.text1}
               onChange={handleChange}
            />
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
            <p style={font} className="meme--text top">
               {meme.memeText.text1}
            </p>
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