import Transports from "./Transports/Transports.js"
import Cargo from "./Cargo/Cargo.js"

const GLOBAL = {
    
    //Transport Types
    TRANSPORT_TYPES: {
        BOAT: Transports.TRANSPORTS.BOAT,
        TRUCK: Transports.TRANSPORTS.TRUCK,
    },
    
    //Container Types
    CONTAINER_TYPES: {
        SMALL: Cargo.CONTAINER.SMALL,
        MEDIUM: Cargo.CONTAINER.MEDIUM,
        LARGE: Cargo.CONTAINER.LARGE,
    },
}

Object.freeze(GLOBAL)

export default GLOBAL