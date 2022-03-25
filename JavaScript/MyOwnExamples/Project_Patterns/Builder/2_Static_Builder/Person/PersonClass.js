class Person {												// Person class

	static persons = []											// static list, to let us keep tracking of all persons instances created

	constructor(password){											// a simple contructor just to check if only PersonBuilder is using it
		if(password !== "PersonBuilder"){
			throw Error("ERROR: Only PersonBuilderClass is allow to build Persons")
		}
	}

	setAge(age){												// set the persons age
		this.age = age
		return this												// return this for chainning method
	}

	setName(name){												// set the persons namme
		this.name = name
		return this												// return this for chainning method
	}
}

module.exports = Person											// exports Person class