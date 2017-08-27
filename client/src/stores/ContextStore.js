import { Collection, Model } from 'mobx-rest'

class Context extends Model { }
class Contexts extends Collection {
  url ()  { return `/contexts` }
  model () { return Context }
}

export default new Contexts()