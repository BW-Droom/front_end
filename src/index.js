import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// react router dom
import { BrowserRouter as Router } from 'react-router-dom'
//redux 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import {reducer as employeeReducer} from './components/reducers/getEmployees';
// import {reducer as jobsReducer} from './components/reducers/addJobs'
import rootReducer from './components/reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const rootReducer = combineReducers({
//     employee: employeeReducer,
//     job: jobsReducer
// })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger))
  );
  
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));