import React from "react"

export default function Meme() {

   const [allMemes, setAllMemes] = React.useState([])
   const [font, setFont] = React.useState({ fontSize: 40 })
   const [meme, setMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
   })

   function getMemeImage() {
      const randomNumber = Math.floor(Math.random() * allMemes.length)
      const url = allMemes[randomNumber].url
      setMeme(prevState => ({
         ...prevState,
         randomImage: url
      }))
   }

   function handleChange(event) {

      const { name, value } = event.target

      setMeme(prevState => prevState = {
         ...meme,
         [name]: value
      })
   }

   React.useEffect(() => {

      fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))

      /* Optional way to write the block code above

         async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
         }
         getMeme()
      */

   }, [])

   console.log("Meme Component rendered")

   return (
      <main>
         <div className="form">
            <input
               type="text"
               placeholder="Top text"
               className="form--input"
               name="topText"
               value={meme.topText}
               onChange={handleChange}
            />
            <input
               type="text"
               placeholder="Bottom text"
               className="form--input"
               name="bottomText"
               value={meme.bottomText}
               onChange={handleChange}
            />
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
               {meme.topText}
            </p>
            <p style={font} className="meme--text bottom">
               {meme.bottomText}
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