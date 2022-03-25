class Person {

	#age = 0
	#name = ""
	#middlename = "" 
	#lastname = ""

	static builderInstance

	/**@param {Number} age*/
	setAge(age) {
		this.#age = age
		return this
	}

	/**@param {String} name*/
	setName(name) {
		this.#name = name
		return this
	}

	/**@param {String} middlename */
	setMiddleName(middlename) {
		this.#middlename = middlename
		return this
	}

	/**@param {String} lastname */
	setLastName(lastname) {
		this.#lastname = lastname
		return this
	}

	getProperties(){

		return {
			age: this.#age,
			name: this.#name,
			middlename: this.#middlename,
			lastname: this.#lastname
		}
	}

	static builder () {
		return new PersonBuilder()
	}
}

class PersonBuilder{

	#age; #name; #middlename; #lastname

	/** @param {Number} age */
	setAge(age) {
		this.#age = age
		return this
	}

	/**@param {String} name*/
	setName(name) {
		this.#name = name
		return this
	}

	/**@param {String} middlename */
	setMiddleName(middlename) {
		this.#middlename = middlename
		return this
	}

	/**@param {String} lastname */
	setLastName(lastname) {
		this.#lastname = lastname
		return this
	}

	build() {
		let person = new Person
		person  .setAge(this.#age)
			.setName(this.#name)
			.setMiddleName(this.#middlename)
			.setLastName(this.#lastname)

		return person
	}

}

const person = Person.builder()
	.setAge(28)
	.setName("Vittor")
	.setMiddleName("C S")
	.setLastName("Javidan")
	.build()

console.log(person.getProperties())