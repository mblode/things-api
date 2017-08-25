import React, { Component } from 'react';
import {observer} from 'mobx-react';

import Store from '../stores/Store'

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Things</h1>
        {Store.lists.map(list =>
          <div key={list.id}>
            <h4>{list.name}</h4>
            <ul>
              {Store.cards
                .filter(card => card.idList === list.id)
                .map(card => <div key={card.id}>
                  <li>
                    {card.name}
                    {Store.checklists
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
