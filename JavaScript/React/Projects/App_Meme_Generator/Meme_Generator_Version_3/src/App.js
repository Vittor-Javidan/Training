import React, { useEffect } from "react"

import Header from './components/Header'
import HandleTextElements from "./components/handleTextElements"
import HandleInputElements from "./components/handleInputElements"

export default function App() {

   const [allMemes, setAllMemes] = React.useState([])
   const [meme, setMeme] = React.useState(() => {
      return {
         randomImage: "http://i.imgflip.com/1bij.jpg",
         textFont: `${40}px`,
         memeText: []
      }
   })

   useEffect(async () => {

      await fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
         
   },[])
   
   return (
      <div>
         <Header />
         <main>
            <div>
               <input
                  type="text"
                  placeholder={`Next New Text Font: ${meme.textFont}`}
                  onChange={(e)=> {
                     e.stopPropagation()

                     const { value } = e.target
                  
                     setMeme(prev => ({
                        ...prev,
                        textFont: [`${value}px`]
                     }))
                  }}
               />

               <div className="form">
                  <HandleInputElements meme={meme} setMeme={setMeme}/>
                  <button
                     className="form--button"
                     onClick={(e)=> {
                        e.stopPropagation()

                        setMeme(prev => prev = {
                           ...prev,
                           memeText: [...meme.memeText, ""]
                        })
                     }}
                  >
                     New Text
                  </button>
                  <button
                     className="form--button"
                     onClick={(e)=> {   
                        
                        e.stopPropagation()

                        const randomNumber = Math.floor(Math.random() * allMemes.length)
                        const url = allMemes[randomNumber].url
                     
                        setMeme(prev => ({
                           ...prev,
                           randomImage: url
                        }))}
                     }
                  >
                     Get a new meme image 🖼️
                  </button>
               </div>
            </div>
            <div
               className="meme"
            >
               <img src={meme.randomImage} className="meme--image" alt="" />
               <HandleTextElements meme={meme}/>
            </div>
         </main>
      </div>
   )
}