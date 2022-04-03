import Cargo from "../Cargo/Cargo.js";

import Boat from "./TransportClasses/Boat.js";
import Truck from "./TransportClasses/Truck.js";

function createTransportType(transportType){
    switch(transportType){
        case Transports.TRANSPORTS.BOAT:     Transports.transport = new Boat(); break
        case Transports.TRANSPORTS.TRUCK:    Transports.transport = new Truck(); break
        default:
            throw Error('No Transport type recognized inside Application class (deliver method)')
    }
}

export default class Transports {

    static TRANSPORTS = {
        BOAT: 0,
        TRUCK: 1
    }

    static transport = null

    /** 
     * @param {Number} transportType 
     * @param {Number} containerType */
    static loadPackage(transportType, containerType){

        Transports.transport = null
        createTransportType(transportType)
        Transports.transport.container = Cargo.storePackage(containerType)
        Transports.transport.deliver()
    }
}