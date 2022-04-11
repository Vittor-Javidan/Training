import Button from './Button.js';

export default class WebButton extends Button {

    render(){
        console.log('WebButton Button rendering')
    }

    onClick(){
        console.log('WebButton Button clicked')
    }
}