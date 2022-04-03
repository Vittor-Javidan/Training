const PersonBuilder = require('./Person/PersonBuilder')			// Requiring PersonBuilder class to build a Person

const person = PersonBuilder						// Instantiate a Person through PersonBuilder class
	.setname("Vittor")							// setting a name
	.setAge(28)								// setting a age
	.build()								// build method to confirm the specifications

console.log(person)							// Console logging the person info

