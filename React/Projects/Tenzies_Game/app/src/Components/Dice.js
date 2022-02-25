export default function Dice(props) {

   const diceArray = props.diceNumbersObject.map(diceNumber => (

      <div className="die-face">
         <h2 className="die-number">
            {diceNumber.value}
         </h2>
      </div>
   ))

   return diceArray
}