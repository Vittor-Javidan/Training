export default class ContainerAbstractClass {

    packageProduct(){ throw Error('You are using a abstract method from "PackageContainer" class. Create a new class to inherit "PackageContainer" and override the method "packageProduct()"') }
}