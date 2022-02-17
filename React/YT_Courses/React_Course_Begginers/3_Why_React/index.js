//Declarative
function Navbar() {

   return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
               <a class="navbar-brand" href="#">Navbar</a>
               <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                     <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link disabled">Disabled</a>
                  </li>
               </ul>
               <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
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