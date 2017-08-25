import React, { Component } from 'react';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  state = {
    lists: [],
    cards: [],
    checklists: [],
  }

  componentDidMount() {
    fetch('/lists')
      .then(res => res.json())
      .then(lists => this.setState({ lists }));

    fetch('/cards')
      .then(res => res.json())
      .then(cards => this.setState({ cards }));

    fetch('/checklists')
      .then(res => res.json())
      .then(checklists => this.setState({ checklists }));
  }

  render() {
    return (
      <div className="App">
        <h1>Things</h1>
        {this.state.lists.map(list =>
          <div key={list.id}>
            <h4>{list.name}</h4>
            <ul>
              {this.state.cards
                .filter(card => card.idList === list.id)
                .map(card => <div key={card.id}>
                  <li>
                    {card.name}
                    {this.state.checklists
                      .filter(checklist => checklist.idCard === card.id)
                      .map(checklist =>
                      <ul>
                        <li key={checklist.id}>
                          {checklist.name}
                          <ul>
                            {checklist.checkItems.map(item =>
                              <li key={item.id}>{item.name}</li>
                            )}
                          </ul>
                        </li>
                      </ul>
                    )}
                  </li>
                </div>)
              }
            </ul>
          </div>
        )}

        <form>
          <button
            onClick={this.getPasswords}>
            Get More
          </button>
        </form>
      </div>
    );
  }
}

export default App;
