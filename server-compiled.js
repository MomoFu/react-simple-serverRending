'use strict';

//var makeTable = require('./render-server');
var express = require('express');
var path = require('path');
var React = require('react');

var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;
var data = require('./data.js');
var todoApp = require('./src/reducers');
var app = express();

require('node-jsx').install({
	extension: '.jsx'
});

var match = require('react-router').match;
var RouterContext = require('react-router').RouterContext;
var Routes = require('./src/routes.jsx');

var ReactDOMServer = require('react-dom/server');
//var routes = React.createFactory(RouterContext);


app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/dist'));

var store = createStore(todoApp, data);

app.get('*', function (req, res) {
	//res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))

	console.log(req.url);
	match({

		routes: Routes,
		location: req.url
	}, function (error, redirectLocation, renderProps) {

		if (error) {
			res.send(500, error.message);
		} else if (redirectLocation) {

			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			//const appHtml = ReactDOMServer.renderToString(<Provider store={store}><RouterContext {...renderProps}/></Provider>)
			var appHtml = ReactDOMServer.renderToString(React.createElement(
				Provider,
				{ store: store },
				React.createElement(RouterContext, renderProps)
			));
			res.send(renderPage(appHtml));
			//	res.send(200, renderToString(<RouterContext {...renderProps}/>))
		} else {
			//console.log(req.url);
			res.send(404, 'Not found');
		}
	});
});

function renderPage(appHtml) {
	return '\n   <!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n  <meta charset="utf-8">\n  <title>Simplest React Todo List</title>\n  <link href="css/bootstrap.min.css" rel="stylesheet">\n  <link rel="stylesheet" href="css/style.css">\n</head>\n<body>\n  <div class="container">\n    <div id="todoBox" class="col-md-6 col-md-offset-3"> ' + appHtml + '\n\t\t</div>\n  </div>\n  <script>\n  window.__INITIAL_STATE__ = ' + JSON.stringify(data) + '\n  </script>\n  <script src="./bundle.js"></script>\n  \n</body>\n</html>\n   ';
}

/*
app.get('/app', function(req, res) {
	var table = makeTable();


	var content = '<!DOCTYPE html>\n\
<html lang="zh-CN">\
<head>\
  <meta charset="utf-8">\
  <title>Simplest React Todo List</title>\
  <link href="css/bootstrap.min.css" rel="stylesheet">\
  <link rel="stylesheet" href="css/style.css">\
</head>\
<body>\
  <div class="container">\
    <div id="todoBox" class="col-md-6 col-md-offset-3">\n' + table +
		'</div>\
  </div>\
\
  <script src="./bundle.js"></script>\
  \
</body>\
</html>\n';

	res.send(content);
})

*/
app.listen(app.get('port'), function () {
	console.log("Node app is running at localhost:" + app.get('port'));
});
