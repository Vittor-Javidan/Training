import React from 'react'               // React dependencie import
import ReactDOM from 'react-dom'        // React-dom dependencie import
import './index.css'                    // Enabling our css file
import App from './App'                 // Importing our Main Component App

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')         // Loads every component inside the div with id "root" inside the html file
)