/* A slim version of carBuilder being the car class at the same time, just to not make this code bigger

    Why builder aways has to be 2 classes (CarBuilder and Car classes for example)? 
    In this file here i am simulating a class who don't need a extra builder and can have many methods as they want.
    Until this moment i just see making sense to have 2 classes if you REALLY need to abstract the Car class, to use it
    as a interface to other classes inherit Car simultaneously
*/

class CarBuilder {

    #wheels = "normal";  #windowColor = "transparent"; 
    #engine = "1.0";     #solarRoof   = "white"; 
    #color  = "white"

    /**@param {string} wheels */
    setWheels(wheels = "normal"){
        this.#wheels = wheels
        return this
    }

    /**@param {string} window */
    setWindowColor(window = "transparent"){
        this.#windowColor = window
        return this
    }

    /**@param {string} engine*/
    setEngine(engine = "1.0"){
        this.#engine = engine
        return this
    }

    /**@param {string} color*/
    setColor(color = "white"){
        this.#color = color
        return this
    }

    /**@param {boolean} solarRoof*/
    setSolarRoof(solarRoof = false){
        this.#solarRoof = solarRoof
        return this
    }

    getCarAtributes(){
        return {
            wheels: this.#wheels,
            window: this.#windowColor,
            engine: this.#engine,
            solarRoof: this.#solarRoof,
            color: this.#color
        }
    }
}

/*
    Other thing that don't makes sense for me yet.
    If the director already has the instructions of what to build setted for each method,
    why instantiate a builder inside another class with another instance from Director class 
    just to put the builder as an argument inside the Director instance? 
    ( https://refactoring.guru/design-patterns/builder right before "Applicability")
    
    i see instantiation inside the methods with the setters instructions as a much more clean way to do it.
    hiding more logic from the client, giving a better interface. No?
*/
class Director {

    static buildSportCar(){
        return new CarBuilder()
            .setWheels("chromed wheels")
            .setWindowColor("Black")
            .setEngine("V8")
            .setColor("Red")
            .setSolarRoof(true)
    }

    static buildCar(){
        return new CarBuilder()
    }
}

const car1 = Director.buildSportCar()
const car2 = Director.buildCar()

console.log(car1.getCarAtributes())
console.log(car2.getCarAtributes())