import TransportAbstractClass from "./AbstractClasses/TransportAbstractClass.js"

export default class Boat extends TransportAbstractClass {

    container = undefined

    deliver(){
        if(this.container)
            console.log('Boat is now delivering the container')
        else
            console.log('Boat has nothing to deliver!')   
    }
}