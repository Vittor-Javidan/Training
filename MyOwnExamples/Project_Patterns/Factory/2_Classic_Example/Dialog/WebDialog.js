import Dialog from './Dialog.js';
import WebButton from '../Button/WebButton.js'

export default class WindowsDialog extends Dialog {

    createButton(){
        return new WebButton()
    }
}