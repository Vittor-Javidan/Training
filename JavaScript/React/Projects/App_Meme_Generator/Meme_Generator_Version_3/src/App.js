import React from "react"

import Header from './components/Header'

import HandleTextElements from "./components/handlers/handleTextElements"
import HandleInputElements from "./components/handlers/handleInputElements"

import addInputElements from "./components/scripts/addInputElements"
import getNewImage from "./components/scripts/getNewImage"

export default function App() {

   const [allMemes, setAllMemes] = React.useState(async () => {
      await fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
   })
   const [meme, setMeme] = React.useState(() => {
      return {
         randomImage: "http://i.imgflip.com/1bij.jpg",
         textFont: `${40}px`,
         memeText: []
      }
   })
   
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
                     onClick={(e)=> addInputElements(e, meme, setMeme)}
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