import React from "react"
import WindowTracker from "./components/WindowTracker"

export default function App() {

   const [show, setShow] = React.useState(true)

   console.log("App Component rendered")

   return (
      <div>
         <button onClick={()=> setShow(prevState => !prevState)}>
            Toggle WindowTracker
         </button>
         {show && <WindowTracker />}
      </div>
   )
}