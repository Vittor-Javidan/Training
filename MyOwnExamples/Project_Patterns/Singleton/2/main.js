class Singleton {

    // This is the main structure =======================================
    static instance = null

    constructor(password){
        if(password !== "I_Know_This_Is_A_Singleton"){
            throw Error('Application class must be instantiate itself')
        }
    }

    static getInstance(){
        if (!Singleton.instance){
            Singleton.instance = new this("I_Know_This_Is_A_Singleton")
        }
        return Singleton.instance
    }

    // This is the actually logics the class solve
    Method(...Args){
        // whatever code that you want
    }
}