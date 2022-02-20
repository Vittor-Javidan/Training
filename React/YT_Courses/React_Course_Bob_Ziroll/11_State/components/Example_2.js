export default function Example_2() {

   const [count, setCount] = React.useState(0)

   function add() {
      setCount(prevCount => prevCount + 1)
   }

   function subtract() {
      setCount(prevCount => prevCount - 1)
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