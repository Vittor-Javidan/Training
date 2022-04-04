export default class TransportAbstractClass {

    deliver(){ throw Error('You are using a abstract method from "Transport" class. Create a new class to inherit "Transport" and override the method "deliver()"') }
    storePackage(){ throw Error('You are using a abstract method from "Transport" class. Create a new class to inherit "Transport" and override the method "storePackage()"') }
}