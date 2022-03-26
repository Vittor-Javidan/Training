import React from "react"							// Importing React form react dependency
import data from './Data'							// importing our database from Data.js file
import List from './List'							// importing the List Component from List.js file

export default function App() {							// The main component App

	const [people, setPeople] = React.useState(data)				// React state people, with default value containing our array of peoples from database

	return (									// App JSX main structure
		<main>
			<section className="container">
				<h3>{people.length} birthdays today</h3>
				<List people={people}/>
				<button onClick={()=> setPeople([])}>
					clear all
				</button>
			</section>
		</main>
	)
}