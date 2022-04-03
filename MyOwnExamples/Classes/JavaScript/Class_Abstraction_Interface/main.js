/* 
    Just a way to simulate a abstraction

    The system will not force you to implement the parent methods to simulate a interface.
    But overall, if you just throw a error in all parenth class methods, this is a half way to
    to a interface, because intelisense will show the parent methods avaible for be used, and
    when its used, it will throw the error saying what is being doing wrong.

    Overall, if you are programming in JavaScript, these are things that you need to be aware when using OOP.
    So, unless you are using typescript, there is no reason to think in terms of abstract class and interface,
    if you need both cases, just use abstraction in general and be aware to not forgot to implement the required
    methods in the children classes. The throw error is there to remembers you in case you lose awareness while
    programming.
*/

class AbstractClass {

    click(){
        throw new Error("You are using a abstract method from AbstractClass. Create a new class to inherit this class and override the method")
    }
}

class ConcreteClass extends AbstractClass {
    
    click(){
        console.log("Nice!, now you are using the right method!!")
    }
}

const instance = new ConcreteClass()
instance.click()
