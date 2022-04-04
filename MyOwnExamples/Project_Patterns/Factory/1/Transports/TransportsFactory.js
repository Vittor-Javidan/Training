import CargoFactory from "../Cargo/CargoFactory.js";

import Boat from "./TransportClasses/Boat.js";
import Truck from "./TransportClasses/Truck.js";

export default class TransportsFactory {

    static TRANSPORTS = {
        BOAT: 0,
        TRUCK: 1
    }

    static transport = null

    /** 
     * @param {Number} transportType 
     * @param {Number} containerType 
     * */
    static assingTransport(transportType, containerType){

        switch(transportType){

            case this.TRANSPORTS.BOAT:     this.transport = new Boat(); break
            case this.TRANSPORTS.TRUCK:    this.transport = new Truck(); break
            default:
                throw Error('No Transport type recognized inside Application class (deliver method)')
        }

        this.transport.container = CargoFactory.assembleContainer(containerType)
        this.transport.deliver()
    }
}