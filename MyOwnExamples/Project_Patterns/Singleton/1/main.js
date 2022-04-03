class Singleton {

    static instance = null

    data = "this is a data"


    constructor() {
        if (this.instance)
            throw Error("Single class can be only instantiate by the static method getInstance")
    }

    static getInstance(){

        if(this.instance === null)
            this.instance = new this

        return this.instance
    }
}

const singletonInstance1 = Singleton.getInstance()
const singletonInstance2 = Singleton.getInstance()


singletonInstance1.data = "This data was modified, that means, singletonInstance1 and singletonInstance2 are the same instance"


console.log(singletonInstance1)
console.log(singletonInstance2)