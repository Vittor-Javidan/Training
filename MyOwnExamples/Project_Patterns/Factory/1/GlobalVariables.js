import TransportsFactory from "./Transports/Transports.js"
import CargoFactory from "./Cargo/Cargo.js"

const GLOBAL = {
    
    //Transport Types
    TRANSPORT_TYPES: {
        BOAT: TransportsFactory.TRANSPORTS.BOAT,
        TRUCK: TransportsFactory.TRANSPORTS.TRUCK,
    },
    
    //Container Types
    CONTAINER_TYPES: {
        SMALL: CargoFactory.CONTAINER.SMALL,
        MEDIUM: CargoFactory.CONTAINER.MEDIUM,
        LARGE: CargoFactory.CONTAINER.LARGE,
    },
}

Object.freeze(GLOBAL)

export default GLOBAL