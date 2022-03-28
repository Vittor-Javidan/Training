import { useContext } from "react"
import { AppContext } from "../App"

export default function MemeImage() {

    const {meme} = useContext(AppContext)
    
    return (
        <img src={meme.randomImage} className="meme--image" alt="" />
    )
}