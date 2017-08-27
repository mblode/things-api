import { Collection, Model } from 'mobx-rest'

class Card extends Model { }
class Cards extends Collection {
  url ()  { return `/cards` }
  model () { return Card }
}

export default new Cards()