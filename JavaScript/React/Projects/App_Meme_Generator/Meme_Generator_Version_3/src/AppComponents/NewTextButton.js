import { useContext } from "react"
import { AppContext } from "../App"

export default function NewTextButton () {

    const {texts, setTexts} = useContext(AppContext)

    function addTextSpace () {
        setTexts([...texts, ""])
    }

    return (
        <button
            className="form--button"
            onClick={addTextSpace}
        >
            New Text
        </button>
    )
}