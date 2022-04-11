import Button from '../Button/Button.js'

export default class Dialog {

    render() {
        console.log('Operation done')
    }

    /**
     * @returns {Button}
     */
    createButton () {
        throw Error ('This is a abstract method from Dialog')
    }
}