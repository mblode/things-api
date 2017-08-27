import { Collection, Model } from 'mobx-rest'

class Project extends Model { }
class Projects extends Collection {
  url ()  { return `/projects` }
  model () { return Project }
}

export default new Projects()