export default function Example_3() {

   let [isGoingOut, setIsGoingOut] = React.useState(true)

   function changeMind(){
      setIsGoingOut(prevState => !prevState)
   }

   return (

      <div className="state">
         <h1 className="state--title">Do I feel like going out tonight?</h1>
         <div className="state--value">
            <h1 onClick={changeMind}>{isGoingOut ? "YESSSS" : "NO :("}</h1>
         </div>
      </div>
   )
}