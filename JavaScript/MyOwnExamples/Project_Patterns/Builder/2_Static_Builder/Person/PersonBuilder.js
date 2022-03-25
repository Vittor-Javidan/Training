const Person = require('./PersonClass')					// Requiring Person class to build persons

class PersonBuilder {							// Person builder class

	static #age								// temporary private age
	static #name								// temporaty private name

	static setAge(age){							// age setter, to save the age inside a temporary variable
		this.#age = age
		return this								// return this for chainning methods
	}

	static setname(name){							// name setter, to save the name inside a temporary variable
		this.#name = name
		return this								// return this for chainnnig methods
	}

	static cleanProperties(){						// clean the private properties to ensure the next Person builded will receive old values
		this.#age = 0
		this.#name = ""
	}

	static createPerson(){							// method responsible to build a person
		const person = new Person("PersonBuilder")
		.setAge(this.#age)
		.setName(this.#name)
		Person.persons.push(person)
	}

	static build(){								// build method, responsible to organize the building logics

		this.createPerson()
		this.cleanProperties()

		return Person.persons[Person.persons.length - 1]
	}
}

module.exports = PersonBuilder						// Exports PersonBuilder class