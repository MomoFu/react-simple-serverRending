var React = require('react');
var ReactDOM = require('react-dom');
import { browserHistory } from 'react-router'
import routes from './src/routes.jsx';
import {  Router } from 'react-router'
// 数据源




// render方法把react实例渲染到页面中 https://facebook.github.io/react/docs/top-level-api.html#reactdom

ReactDOM.render(
	<Router history={browserHistory} routes={routes} />
	
	
	,	document.getElementById('todoBox')
);