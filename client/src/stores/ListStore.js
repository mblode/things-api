import { Collection, Model } from 'mobx-rest'

class List extends Model { }
class Lists extends Collection {
  url ()  { return `/lists` }
  model () { return List }
}

export default new Lists()