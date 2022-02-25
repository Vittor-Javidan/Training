import React from "react"

export default class App extends React.Component {
   state = {
      character: {}
   }

   componentDidMount(){
      fetch("https://swapi.dev/api/people/1")
         .then(res => res.json())
         .then(data => this.setState({character: data}))
   }

   render() {
      console.log(this.state.character)
      return (
         <h1>Hello {this.state.character.name}</h1>
      )
   }
}