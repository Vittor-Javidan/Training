import { useState, useEffect, createContext } from "react"

import Header from './AppComponents/Header'
import FontInput from "./AppComponents/FontInput"
import TextsInput from "./AppComponents/TextsInput"
import NewTextButton from "./AppComponents/NewTextButton"
import GetANewMemeImageButton from "./AppComponents/GetANewMemeImageButton"
import MemeImage from "./AppComponents/MemeImage"
import TextsOutput from "./AppComponents/TextsOutput"

export const AppContext = createContext()

export default function App() {

   const [allMemes, setAllMemes] = useState([])
   const [meme, setMeme] = useState(() => (
      {
         randomImage: "http://i.imgflip.com/1bij.jpg",
         memeText: []
      }
   ))
   const [fontSize, setFontSize] = useState(40)

   const props = {
      allMemes,   setAllMemes,
      meme,       setMeme,
      fontSize,   setFontSize
   }

   useEffect(async () => {
      await fetch("https://api.imgflip.com/get_memes")
         .then(res => res.json())
         .then(data => setAllMemes(data.data.memes))
   },[])

   return (
      <AppContext.Provider value={props}>
         <Header />
         <main>
            <div>
               <div className="form">
                  <FontInput />
                  <TextsInput />
                  <NewTextButton />
                  <GetANewMemeImageButton />
               </div>
            </div>
            <div className="meme">
               <MemeImage />
               <TextsOutput />
            </div>
         </main>
      </AppContext.Provider >
   )
}