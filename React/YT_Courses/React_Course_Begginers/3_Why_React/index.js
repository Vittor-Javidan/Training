//Declarative
function Navbar() {

   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
               <a className="navbar-brand" href="#">Navbar</a>
               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <a className="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">Link</a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link disabled">Disabled</a>
                  </li>
               </ul>
               <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
               </form>
            </div>
         </div>
      </nav>
   )
}

function MainContent() {

   return <h1>This is a declarative way to program</h1>
}

ReactDOM.render(

   <div>
      <Navbar />
      <MainContent />
   </div>,
   document.getElementById("root")
)

//Imperative
const h1 = document.createElement('h1')
h1.textContent = "This is an imperative way to program"
h1.className = "header"
document.getElementById("root").append(h1)