import { useContext } from "react"
import { AppContext } from "../App"

export default function GetANewMemeImageButton () {

    const {allMemes, setMeme} = useContext(AppContext)

    return (
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
    )
}