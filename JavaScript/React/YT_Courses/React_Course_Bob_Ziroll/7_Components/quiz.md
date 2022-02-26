1. What is a React component?
A function that returns React elements

2. What's wrong with this code?
```
function myComponent() {

   return (
      <small>I'm tiny text!</small>
   )
}
```
Components name must be in PascalCase instead camelCase

3. What's wrong with this code?
```
function Header() {

   return (

      <header>
         <nav>
            <img src="./react-logo.png" width="40px"/>
         </nav>
      </header>
   )
}

ReactDOM.render(
   Header(),
   document.getElementById('root')
)
```
In react convention we must surroun "Header" with angle brackets as a normal html tag, instead calling as a function, like <Header/> intead of Header()