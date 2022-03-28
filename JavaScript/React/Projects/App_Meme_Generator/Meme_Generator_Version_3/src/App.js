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
   const [texts, setTexts] = useState([])
   const [fontSize, setFontSize] = useState(40)
   const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg")

   const props = {
      allMemes,      setAllMemes,
      texts,         setTexts,
      memeImage,     setMemeImage,
      fontSize,      setFontSize
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