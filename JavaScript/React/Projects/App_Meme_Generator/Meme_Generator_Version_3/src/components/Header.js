export default function Header() {

   const HeaderImage = () => (
      <img
         src="./images/components/Header/troll-face.png"
         className="header--image"
         alt=""
      />
   )

   const HeaderTitle = () => (
      <h2 className="header--title">Meme Generator</h2>
   )

   const ProjectIndex = () => (
      <h4 className="header--project">React Course - Project 3</h4>
   )

   return (
      <header className="header">
         <HeaderImage />
         <HeaderTitle />
         <ProjectIndex />
      </header>
   )
}