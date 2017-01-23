//var makeTable = require('./render-server');
var express = require('express')
var path = require('path')
var React = require('react')
var app = express()

require('node-jsx').install({
	extension: '.jsx'
});

var match = require('react-router').match;
var RouterContext = require('react-router').RouterContext;
var Routes = require('./src/routes.jsx');

var TodoBox = require('./src/todoBox/index.jsx');

var ReactDOMServer = require('react-dom/server');
//var routes = React.createFactory(RouterContext);


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/dist'))



app.get('*', function(req, res) {
	//res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))

	console.log(req.url)
	match({

		routes: Routes,
		location: req.url
	}, (error, redirectLocation, renderProps) => {

		if (error) {
			res.send(500, error.message)
		} else if (redirectLocation) {

			res.redirect(302, redirectLocation.pathname + redirectLocation.search)
		} else if (renderProps) {
			const appHtml = ReactDOMServer.renderToString(<RouterContext {...renderProps}/>)
			res.send(renderPage(appHtml));
			//	res.send(200, renderToString(<RouterContext {...renderProps}/>))
		} else {
			//console.log(req.url);
			res.send(404, 'Not found')
		}
	})

})

function renderPage(appHtml) {
	return `
   <!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Simplest React Todo List</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="container">
    <div id="todoBox" class="col-md-6 col-md-offset-3"> ${appHtml}
		</div>
  </div>

  <script src="./bundle.js"></script>
  
</body>
</html>
   `
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
app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'))
})