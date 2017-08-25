import { observable, action, computed, state }

class Store {
    @observable githubProjects = []
    @state = "pending" // "pending" / "done" / "error"

    @action
    fetchProjects() {
        this.githubProjects = []
        this.state = "pending"
        fetchGithubProjectsSomehow().then(
            // inline created action
            action("fetchSuccess", projects => {
                const filteredProjects = somePreprocessing(projects)
                this.githubProjects = filteredProjects
                this.state = "done"
            }),
            // inline created action
            action("fetchError", error => {
                this.state = "error"
            })
        )
    }
}