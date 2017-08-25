import { observable, action } from 'mobx'

  
export class Store {
    @observable lists = [];
    @observable cards = [];
    @observable checklists = [];
    @observable loading = true;

    constructor() {
        this.fetch()
    }

    @action fetch() {
        window.fetch('/lists')
            .then(res => res.json())
            .then(action(json => {
                this.lists = json
            }))

            window.fetch('/cards')
            .then(res => res.json())
            .then(action(json => {
                this.cards = json
            }))

            window.fetch('/checklists')
            .then(res => res.json())
            .then(action(json => {
                this.checklists = json
            }))
    }
}

export default new Store()