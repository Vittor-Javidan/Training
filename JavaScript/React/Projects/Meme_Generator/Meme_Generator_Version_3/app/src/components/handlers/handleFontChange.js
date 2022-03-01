export default function handleFontChange(e, setMeme) {

   e.stopPropagation()

   const { value } = e.target

   setMeme(prev => ({
      ...prev,
      textFont: [`${value}px`]
   }))
}