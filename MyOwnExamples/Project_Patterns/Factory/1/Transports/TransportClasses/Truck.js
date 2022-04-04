import TransportAbstractClass from "./AbstractClasses/TransportAbstractClass.js"

export default class Truck extends TransportAbstractClass {

    container = undefined

    deliver(){
        this.container
            ? console.log('Truck is now delivering the container')
            : console.log('Truck has nothing to deliver!')   
    }
}