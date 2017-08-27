import { Collection, Model } from 'mobx-rest'

class Checklist extends Model { }
class Checklists extends Collection {
  url ()  { return `/checklists` }
  model () { return Checklist }
}

export default new Checklists()