var React = require('react');
var ReactDOM = require('react-dom');
import { browserHistory } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import routes from './src/routes.jsx';
import {  Router } from 'react-router';
import todoApp from './src/reducers';
//import data from './data.js'

// 数据源

var store ;

if( window.__INITIAL_STATE__ ){
	const initialState = (window.__INITIAL_STATE__)
    store = createStore(todoApp, initialState)
}

else store =createStore(todoApp)

// render方法把react实例渲染到页面中 https://facebook.github.io/react/docs/top-level-api.html#reactdom

ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
	
	,	document.getElementById('todoBox')
);