var React = require( 'react' );

var  connect  = require( 'react-redux' ).connect;
var  TodoList = require( './../todoList/index.jsx') ;
var TodoForm = require( './../todoForm/index.jsx' )
var addTodo = require('./../actions.js').addTodo ;
var completeTodo = require('./../actions.js').completeTodo;
var deleteTodo = require('./../actions.js').deleteTodo;
class TodoBox extends React.Component {
  constructor(props){
    super(props);
   // this.dispatch  = this.props.dispatch;
    this.state = {
       num : 1000 ,
       
    }
  }
  

  // 根据id删除一项任务
  handleTaskDelete(taskId) {
   
    var data = this.props.todos;
    for (var i in data) {
      if (data[i].id === taskId) {
       
        this.props.dispatch(deleteTodo(taskId))
        
            
        break;
      }
    }
  }

  // 切换一项任务的完成状态
  handleToggleComplete(taksId) {

    var data = this.props.todos;
    for (var i in data) {
      if (data[i].id === taksId) {
       
        this.props.dispatch(completeTodo(taksId))
        
            
        break;
      }
    }
   
  }

  // 给新增的任务一个随机的id
  

  // 新增一项任务
  handleSubmit(task) {
    var data = this.props.todos;
    //var id = this.generateId();
    var id = this.state.num ++ ;
   
   
    //console.log( this.props)
    
    var me = addTodo(task, id) ;
      //console.log(this.props);
     this.props.dispatch(me);
     //store.dispatch(me)
  }



  render() {
    var statistics = {
      // 统计任务总数及完成的数量
      todoCount: this.props.todos.length || 0,
      todoCompleteCount: this.props.todos.filter(function(item) {
        return item.completed === true;
      }).length
    };

    return (
      <div className="well">
        <h1 className="text-center">React Todo</h1>
        <TodoList data={this.props.todos}
          deleteTask={this.handleTaskDelete.bind(this)}
          toggleComplete={this.handleToggleComplete.bind(this)}
          todoCount={statistics.todoCount}
          todoCompleteCount={statistics.todoCompleteCount} />
        <TodoForm submitTask={this.handleSubmit.bind(this)} />

      </div>

    )
  }
};

function select(state) {
  console.log('i am state '+ JSON.stringify(state));
  return {
     todos : state,
    
  }
}

// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
module.exports =  connect(select)(TodoBox)






/*
ReactDOM.render(
  <TodoBox />,
  document.getElementById('todoBox')
);
*/

//module.exports = TodoBox;