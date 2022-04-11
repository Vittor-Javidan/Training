import Dialog from './Dialog.js';
import WindowsButton from '../Button/WindowsButton.js'

export default class WindowsDialog extends Dialog {

    createButton(){
        return new WindowsButton()
    }
}