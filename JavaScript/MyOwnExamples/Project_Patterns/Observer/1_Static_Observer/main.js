/* 
    The main idea behing the Observer, is to have a place to store functions, 
    based on a key (usually in a string format)

    The observer must have two methods:
        Subscribe: 
            Responsible to register the avaible function inside an dictionary, 
            javascript object. Whatever you can manage using the pair key:value is valid

        Post Event: 
            Responsible to find the function of interested based on the key you registered 
            the specific function

    The obsever can be build inside a function scope, inside a class, object, etc. 
    In our case, i chose to make it as it own class, and static, to have it as a nameSpace style

    Since all what obeservers store are functions, i see no problem to make global. But if you 
    want to organize more, for sure you can make inside a class function, to have the advantage 
    of each instance have its own observer, or maybe not allow functions of diferent nature 
    and purpose to be together. The way you organize and implement, probably is opinion based

    the main advantage of observer is that you have a possibility to put all methods and functions
    inside its own file, cleaning up the file responsible to instantiate a specific class.

    If you have the hability to subscribe function as you need, you have too the possibility to activate
    and deactivate, just by commenting the subscribe call statement. If see the code, if you don't have an
    function subscribed, if you try to call it, no error will be throw

    the post event can follow a style of calling a specific key, or calling the all functions subscribed in
    a single call. In our case i coded for a specific key, because i found easy to learn it
*/

// Dummy Functions
function myFunction () { console.log("This is my function") }
function whatever() { console.log("Whatever man! this is too easy :)") }

// Observer logics
class Observer {

    static #subcribed = {}

    static subscribe(key, fn) {

        if(!this.#subcribed[key]) {

            this.#subcribed[key] = fn
            return console.log(`${key} subscribed`)
        }
        return console.log(`${key} already subscribed`)
        
    }

    static postEvent (key, fnArgs) {

        if(this.#subcribed[key]) {

            this.#subcribed[key](fnArgs)
            return console.log(`${key} function was called`)
        }
        return console.log(`${key} function not subscribed`)
    }
}

Observer.subscribe("Mykey", myFunction)
Observer.subscribe("MySecondKey", whatever)

Observer.postEvent("Mykey")
Observer.postEvent("MySecondKey")