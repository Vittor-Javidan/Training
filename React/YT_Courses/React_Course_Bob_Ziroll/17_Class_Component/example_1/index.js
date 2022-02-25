
import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

class App extends React.Component {

   render() {
      return (
         <div>
            <Header username={"Vittor"} />
            <Greeting />
         </div>
      )
   }
}

class Header extends React.Component {

   render() {
      return (
         <header>
            <p>Welcome, {this.props.username}!</p>
         </header>
      )
   }
}

class Greeting extends React.Component {
   date = new Date()
   hours = this.date.getHours()
   timeOfDay

   getTimeOfDay() {
      if (this.hours < 12) {
         this.timeOfDay = "morning"
      } else if (this.hours >= 12 && this.hours < 17) {
         this.timeOfDay = "afternoon"
      } else {
         this.timeOfDay = "night"
      }
      return this.timeOfDay
   }

   render() {
      return (
         <h1>Good {this.getTimeOfDay()} to you, sir or madam!</h1>
      )
   }
}

ReactDOM.render(<App />, document.getElementById("root"))
