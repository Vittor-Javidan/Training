import { useContext } from "react"
import { AppContext } from "../App"

export default function FontInput() {

    const {fontSize, setFontSize} = useContext(AppContext)

    return (
        <input 
            type="text"
            placeholder={`FontSize: ${fontSize}`}
            value={fontSize}
            onChange={(e)=> setFontSize(e.target.value)}
        />
    )
}