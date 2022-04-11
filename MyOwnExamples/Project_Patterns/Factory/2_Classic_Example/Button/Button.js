export default class Button {

    render() {
        throw Error('This is a render abstract method from Button')
    }

    onClick() {
        throw Error('This is a onClick abstract method from Button')
    }
}