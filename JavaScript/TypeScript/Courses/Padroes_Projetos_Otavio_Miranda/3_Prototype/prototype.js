/* Using Class ==========================================================================================================================*/
class myPerson {						// Class myPerson

	name = "Vittor"							// string name
	lastName = "Javidan"						// string lastname
	age = 28							// number age

	clone() {
		const thisClone = Object.create(this)
		return thisClone
	}
}
const myPerson1 =  new myPerson					// myPerson instantiation
const myPerson2 = myPerson1.clone()				// using myPerson as a prototype for myPerson through the clone function
const myPerson3 = Object.create(myPerson1)			// using myPerson as a prototype for myPerson directly

console.log(myPerson1)						// Log of myPerson1 (Shows all myPerson1 information)
console.log(myPerson2)						// Log of myPerson2 (Shows nothing)
console.log(myPerson3)						// Log og myPerson3 (Shows nothing)

console.log(myPerson1.name)					// Log of myPerson1 name
console.log(myPerson2.name)					// Log of myPerson2 name (It shows the name from myPerson1)
console.log(myPerson3.name)					// Log of myPerson3 name (It shows the name from myPerson1)

/* Using Object ==========================================================================================================================*/
const AnotherPerson = {						// anotherPerson object

	name: "Jill",							// string name
	lastName: "Valentine",						// string lastName
	age: 24,								// number age

	clone () {
		const thisClone = Object.create(this)
		return thisClone
	}
}

const anotherPerson2 = AnotherPerson.clone()			// Using anotherPerson as a prototype for anotherPerson2 through clone function
const anotherPerson3 = Object.create(AnotherPerson)		// Using anotherPerson as a prototype for anotherPerson3

console.log(AnotherPerson)					// Log of anotherPerson (Shows all anotherPerson information)
console.log(anotherPerson2)					// Log of anotherPerson (Shows nothing)
console.log(anotherPerson3)					// Log of anotherPerson2 (Shows nothing)

console.log(AnotherPerson.name)					// Log of anotherPerson name
console.log(AnotherPerson.name)					// Log of anotherPerson2 name (Shows anotherPerson name)
console.log(anotherPerson3.name)				// Log of anotherPerson3 name (Shows anotherPerson name)

/* Using Function ==========================================================================================================================*/
function WhateverIsThis(firstName, lastName, age) {
	this.thisName = firstName
	this.thisLastName = lastName
	this.thisAge = age
}

WhateverIsThis.prototype = Object.create(AnotherPerson)

const whateverPerson = new WhateverIsThis("Chris", "Redfiel", 33)

console.log(whateverPerson.name)
console.log(whateverPerson.lastName)
console.log(whateverPerson.age)
console.log(whateverPerson.thisName)
console.log(whateverPerson.thisLastName)
console.log(whateverPerson.thisAge)

