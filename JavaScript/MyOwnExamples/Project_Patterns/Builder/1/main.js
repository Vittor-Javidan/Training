class Person {									// Class Person

	#age = 0									// Private age property
	#name = ""									// Private name property
	#middlename = "" 								// Private middlename property
	#lastname = ""									// Private lasname pproperty						

	/**@param {Number} age*/
	setAge(age) {									// age setter
		this.#age = age
		return this									// returns this for method chainning
	}

	/**@param {String} name*/
	setName(name) {									// name setter
		this.#name = name
		return this									// returns this for method chainning
	}

	/**@param {String} middlename */
	setMiddlename(middlename) {							// middlename setter
		this.#middlename = middlename
		return this									// returns this for method chainning
	}

	/**@param {String} lastname */
	setLastname(lastname) {								// lastname setter
		this.#lastname = lastname
		return this									// returns this for method chainning
	}

	setInfo({									// All properties setter
		_age,
		_name,
		_middlename,
		_lastname
	}){
		this.#age = _age
		this.#name = _name
		this.#middlename = _middlename
		this.#lastname = _lastname
	}

	getInfo(){									// All properties getter

		return {									// returns a object with all properties
			age: this.#age,
			name: this.#name,
			middlename: this.#middlename,
			lastname: this.#lastname
		}
	}

	static builder () {								// Static builder, to call the builder without the need to instantiate the person.
		return new PersonBuilder()
	}
}

class PersonBuilder{								// PersonBuilder class

	#age; #name; #middlename; #lastname						// private properties to build the person

	/** @param {Number} age */
	setAge(age) {									// age setter
		this.#age = age
		return this									// returns this for method chainning
	}

	/**@param {String} name*/
	setName(name) {									// name setter
		this.#name = name
		return this									// returns this for method chainning
	}

	/**@param {String} middlename */
	setMiddlename(middlename) {							// middlename setter
		this.#middlename = middlename
		return this									// returns this for method chainning
	}

	/**@param {String} lastname */
	setLastname(lastname) {								// lastname setter
		this.#lastname = lastname
		return this									// returns this for method chainning
	}

	build() {									// build method to build a new Person instance using all private properties
		let person = new Person								// Instantiate a Person
		person  .setAge(this.#age)							// Chainning methods configuring the person
			.setName(this.#name)
			.setMiddlename(this.#middlename)
			.setLastname(this.#lastname)

		return person									// return the Person instance
	}

}


// ================================================================================================================================================================

const person1 = Person.builder()						// Person instance through the builder
	.setAge(28)
	.setName("Vittor")
	.setMiddlename("C S")
	.setLastname("Javidan")
	.build()

const person2 = new Person()							// Person instance directly through setters
person2
	.setAge(28)
	.setName("Vittor")
	.setMiddlename("C S")
	.setLastname("Javidan")

const person3 = new Person()							// Person instance directly through object
person3.setInfo({
	_name: "Vittor",
	_age: 28,
	_middlename: "C S",
	_lastname: "Javidan"
})

console.log(person1.getInfo())
console.log(person2.getInfo())
console.log(person3.getInfo())