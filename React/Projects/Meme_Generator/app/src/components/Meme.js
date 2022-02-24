import React from "react"

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

   function newText(){

      function handleTextChange(event){

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
               <div
                  className="meme--text top"
                  key={`teKey${id}`}
                  id={`textElement${id}`}
                  style={{fontSize: meme.textFont}}
               >
                  {value}
               </div>
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
         <div
            className="meme--text top"
            key={`teKey${meme.textCount + 1}`}
            id={`textElement${meme.textCount + 1}`}
            style={{fontSize: meme.textFont}}
         >
            {meme.memeText[meme.textCount]}
         </div>
      ])
   }
   function newFontSize(event){
      const { value } = event.target

      setTextElements(prev => {

         setMeme(prev => ({
            ...prev,
            textFont: [`${value}px`]
         }))

         let elementsArray = [...prev]
         for(let i = 0; i < elementsArray.length; i++){
            elementsArray[i] = (
               <div
                  className="meme--text top"
                  key={`teKey${i + 1}`}
                  id={`textElement${i + 1}`}
                  style={{fontSize: [`${value}px`]}}
               >
                  {meme.memeText[i]}
               </div>
            )
         }

         return prev = elementsArray
      })
   }
   function getNewImage(){
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

         <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt="" />
            {textElements}
         </div>

         <input
            type="text"
            placeholder={`Font size: ${meme.textFont}`}
            onChange={newFontSize}
         />

      </main>
   )
}

/*
   React.useEffect(() => {
      console.log(meme.memeText)
      console.log(`${meme.textCount} ${meme.randomImage} ${meme.textFont}`)
   }, [meme])
*/