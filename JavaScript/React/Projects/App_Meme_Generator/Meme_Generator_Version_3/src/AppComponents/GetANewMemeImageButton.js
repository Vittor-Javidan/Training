import { useContext } from "react"
import { AppContext } from "../App"

export default function GetANewMemeImageButton () {

    const {allMemes, setMemeImage} = useContext(AppContext)

    function getImage(e) {
        e.stopPropagation()

        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        
        setMemeImage(url)
    }

    return (
        <button
            className="form--button"
            onClick={getImage}
        >
            Get a new meme image 🖼️
        </button>
    )
}