export default function handleFontChange(e, setMeme) {
   const { value } = e.target

   setMeme(prev => ({
      ...prev,
      textFont: [`${value}px`]
   }))
}