import WindowsDialog from './Dialog/WindowsDialog.js'
import WebDialog from './Dialog/WebDialog.js'

class Application {

    #os = ''
    #dialog

    constructor(os){
        this.#os = os
    }

    initialization(){

        switch (this.#os) {
            case 'Windows':
                this.#dialog = new WindowsDialog()
                break
            case 'Web':
                this.#dialog = new WebDialog()
                break
            default:
                throw Error('No os recognized')
        }
    }

    main(){
        this.initialization()
        const button = this.#dialog.createButton()
        button.render()
        button.onClick()
    }
}

const app = new Application('Windows')
app.main()

/* 
    Milestone: I DID ALL THIS JUST BY LOOKING TO THE UML! I'M PROUD OF MYSELF!
    FUCK YEAHH BOYY!!
*/