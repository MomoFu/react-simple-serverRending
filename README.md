# simplest-react-todolist


```javascript
npm init
npm install 
webpack //client端
babel server-koa.js --out-file server-compiled.js --presets=es2015,react
node server-compiled.js //babel server-koa.js之后的结果，服务器端
```

服务器开启后，在浏览器按照路由来输入即可。路由配置在src/routes.jsx

react后端渲染涉及三部分，即基础的html模板，router，以及redux状态。

后端渲染配合router的使用[参见这里](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/13-server-rendering)。

redux是否使用取决于项目本身是否使用，[参见这里](http://cn.redux.js.org/docs/recipes/ServerRendering.html)，以及[这里](http://taobaofed.org/blog/2016/08/18/react-redux-connect/)

babel命令行的使用[参见这里](https://babeljs.io/docs/usage/cli/)。





