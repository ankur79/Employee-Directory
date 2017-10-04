import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import empState from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(empState);

ReactDOM.render(<Provider store={store}>
                    <div className="App">
                        <div className="App-header">
                            <div className="App-title">Employee Directory</div>
                        </div>
                        <App/>
                    </div>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
