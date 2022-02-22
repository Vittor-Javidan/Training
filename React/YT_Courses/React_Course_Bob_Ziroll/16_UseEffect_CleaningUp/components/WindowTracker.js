import React from "react"

export default function WindowsTracker() {

   const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

   React.useEffect(() => {

      function watchWidth() {
         setWindowWidth(window.innerWidth)
         console.log("Window Resized")
      }

      window.addEventListener("resize", watchWidth)
      
      return ()=> {
         window.removeEventListener("resize", watchWidth)
         console.log("cleaning up")
      }
   }, [])

   return (
      <div>
         Window width: {windowWidth}
      </div>
   )
}