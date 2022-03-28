import { useContext } from "react"
import { AppContext } from "../App"

export default function MemeImage() {

    const {memeImage} = useContext(AppContext)
    
    return (
        <img src={memeImage} className="meme--image" alt="" />
    )
}