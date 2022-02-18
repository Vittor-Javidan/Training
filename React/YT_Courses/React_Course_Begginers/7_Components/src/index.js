import ReactDOM from "react-dom"
import Header from "./Components/Header"
import Content from "./Components/Content"
import Footer from "./Components/Footer"

function Page() {

   return (

      <div>
         <Header />
         <Content />
         <Footer />
      </div>
   )
}

ReactDOM.render(
   <Page />,
   document.getElementById('root')
)