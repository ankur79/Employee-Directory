import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'

import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import empState from './reducers'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Profile from './Profile';
import NotFound from './NotFound';
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)
const store = createStore(empState, applyMiddleware(middleware));

ReactDOM.render(<Provider store={store}>
                    <ConnectedRouter history={history}>
                        <div className="App">
                            <div className="App-header">
                                <div className="App-title">Employee Directory</div>
                            </div>
                            <Switch>
                                <Route exact path="/" component={App}/>
                                <Route path="/edit/:id" component={Profile}/>
                                <Route path="/add" component={Profile}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </ConnectedRouter>    
                </Provider>, document.getElementById('root'));
registerServiceWorker();
