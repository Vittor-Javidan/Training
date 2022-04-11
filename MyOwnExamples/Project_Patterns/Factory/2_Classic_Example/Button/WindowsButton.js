import Button from './Button.js';

export default class WindowsButton extends Button {

    render(){
        console.log('Windows Button rendering')
    }

    onClick(){
        console.log('Windows Button clicked')
    }
}