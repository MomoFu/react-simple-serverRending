var React = require('react');

// 数据源


var    Route = require( 'react-router' ).Route ;


// table类
var TodoBox = require('./todoBox/index.jsx');

var Another = require('./anotherModule/index.jsx');


// render方法把react实例渲染到页面中 https://facebook.github.io/react/docs/top-level-api.html#reactdom

module.exports =  (

	    <Route path="/">

	    	<Route path="one" component={TodoBox} />
	    	<Route path="another" component={Another} />
	    </Route>

	   
	     
	

	
);