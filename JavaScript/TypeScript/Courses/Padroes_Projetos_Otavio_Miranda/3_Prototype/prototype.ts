interface tsPrototype {							// Interface to force the classes to implement the clone method
        clone(): tsPrototype							// clone method
}

class tsPerson implements tsPrototype {					// Person will represent one of the possible prototypes
        constructor(public name: string, public age: number) {}			// Constructor with a string name and number age

        clone(): this {								// Clone method implemented from the Prototype interface
                const newPerson = Object.create(this)					// newPerson represents a copy of the instance with the instance being its prototype
                return newPerson							// Return the copy oh the instance
        }
}

const person1 = new tsPerson("Vittor", 28)				// Person instantiation
const person2 = person1.clone()						// Clone of person1. The person1 will be the person2 prototype

console.log(person1.name)						// Person1 name
console.log(person2.name)						// Person2 name. In this example, both will be equal with same members
