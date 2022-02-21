export default function Box(props) {

   const boxStyles = {
      backgroundColor: props.on ? "#222222" : "transparent",
   }

   return (
      <div
         style={boxStyles}
         className='box'
         onClick={props.toggle}
      >
      </div>
   )
}