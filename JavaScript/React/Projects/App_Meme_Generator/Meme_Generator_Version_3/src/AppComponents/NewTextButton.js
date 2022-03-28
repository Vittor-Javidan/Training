import { useContext } from "react"
import { AppContext } from "../App"

export default function NewTextButton () {

    const {meme, setMeme} = useContext(AppContext)

    return (
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
    )
}