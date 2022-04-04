import TransportsFactory from "./Transports/Transports.js"

export default class Application {

    static instance = null

    constructor(password){
        if(password !== "I_Know_This_Is_A_Singleton"){
            throw Error('Application class must be instantiate itself')
        }
    }

    static getInstance(){
        if (!Application.instance){
            Application.instance = new this("I_Know_This_Is_A_Singleton")
        }
        return Application.instance
    }

    /** 
     * @param {Number} transportType
     * @param {Number} containerType 
     * */
    deliver(transportType, containerType){
        TransportsFactory.assingTransport(transportType, containerType)
    }
}