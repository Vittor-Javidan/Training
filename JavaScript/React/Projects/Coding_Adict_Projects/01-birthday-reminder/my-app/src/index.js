import React from 'react'			// Importing React from react dependencie
import ReactDOM from 'react-dom'		// Importing ReactDOM from react-dom dependencie
import App from './App'				// Importing our App Main Component from App.js file
import './index.css'				// Importing the css file

ReactDOM.render(				// Renders Our Component App and all his childrens
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')			// put all DOM elements inside the tag with id "root" inside the html structure
)