import SmallContainer from "./CargoClasses/SmallContainer.js";
import MediumContainer from "./CargoClasses/MediumContainer.js";
import LargeContainer from "./CargoClasses/LargeContainer.js";

export default class CargoFactory {

    static CONTAINER = {
        SMALL: 0,
        MEDIUM: 1,
        LARGE: 2
    }

    static container

    /**
     * @param {Number} containerType
     * */
    static assembleContainer(containerType){

        switch(containerType) {
            case this.CONTAINER.SMALL:   this.container = new SmallContainer(); break
            case this.CONTAINER.MEDIUM:  this.container = new MediumContainer(); break
            case this.CONTAINER.LARGE:   this.container = new LargeContainer(); break
            default:
                throw Error('Package type not recognized inside "PackageHandler" class (storePackage method)')
        }

        return this.container
    }
}