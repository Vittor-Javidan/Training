import ReactDOM from 'react-dom'

function App() {

   const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

   function addItem() {
      const newThingText = `Thing ${things.length + 1}`
      setThings(prevState => [...prevState, newThingText])
   }

   const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

   return (
      <div>
         <button onClick={addItem} >Add Item</button>
         {thingsElements}
      </div>
   )
}

function Count() {

   const [count, setCount] = React.useState(0)

   function add() {
      setCount(count + 1)
   }

   function subtract() {
      setCount(count - 1)
   }

   return (
      <div>
         <div>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <p>{count}</p>
         </div>
      </div>
   )
}

ReactDOM.render(
   <div>
      <App />
      <Count />
   </div>,
   document.getElementById('root')
)