import SmallPackage from "./CargoClasses/SmallPackage.js";
import MediumPackage from "./CargoClasses/MediumPackage.js";
import LargePackage from "./CargoClasses/LargePackage.js";

function createContainerType(containerType){
    switch(containerType) {
        case Cargo.CONTAINER.SMALL:   Cargo.container = new SmallPackage(); break
        case Cargo.CONTAINER.MEDIUM:  Cargo.container = new MediumPackage(); break
        case Cargo.CONTAINER.LARGE:   Cargo.container = new LargePackage(); break
        default:
            throw Error('Package type not recognized inside "PackageHandler" class (storePackage method)')
    }
}

export default class Cargo {

    static CONTAINER = {
        SMALL: 0,
        MEDIUM: 1,
        LARGE: 2
    }

    static container

    /**@param {Number} containerType*/
    static storePackage(containerType){

        Cargo.container = undefined
        createContainerType(containerType)
        return Cargo.container
    }
}