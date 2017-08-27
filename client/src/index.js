import React from 'react';
import ReactDOM from 'react-dom';
import { apiClient } from 'mobx-rest'
import adapter from 'mobx-rest-fetch-adapter'

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import registerServiceWorker from './registerServiceWorker';


// Initialize mob-rest API adapter
const apiPath = 'http://localhost:3001'
apiClient(adapter, { apiPath })

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
