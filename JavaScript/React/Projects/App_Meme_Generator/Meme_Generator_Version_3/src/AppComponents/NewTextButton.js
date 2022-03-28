import { useContext } from "react"
import { AppContext } from "../App"

export default function NewTextButton () {

    const {texts, setTexts} = useContext(AppContext)

    return (
        <button
            className="form--button"
            onClick={(e)=> {
                e.stopPropagation()

                setTexts([...texts, ""])
            }}
        >
            New Text
        </button>
    )
}