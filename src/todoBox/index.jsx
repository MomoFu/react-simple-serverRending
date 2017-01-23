var React = require( 'react' );


var  TodoList = require( './../todoList/index.jsx') ;
var TodoForm = require( './../todoForm/index.jsx' )
class TodoBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
       data: [{
        "id": "0001",
        "task": "吃饭",
        "complete": "false"
      }, {
        "id": "0002",
        "task": "睡觉",
        "complete": "false"
      }, {
        "id": "0003",
        "task": "打豆豆",
        "complete": "true"
      }, ]
    }
  }
  

  // 根据id删除一项任务
  handleTaskDelete(taskId) {
    var data = this.state.data;
    data = data.filter(function(task) {
      return task.id !== taskId;
    });
    this.setState({
      data
    });
  }

  // 切换一项任务的完成状态
  handleToggleComplete(taksId) {
    var data = this.state.data;
    for (var i in data) {
      if (data[i].id === taksId) {
        data[i].complete = data[i].complete === "true" ? "false" : "true";
        break;
      }
    }
    this.setState({
      data
    });
  }

  // 给新增的任务一个随机的id
  generateId() {
    return Math.floor(Math.random() * 9000) + 1000;
  }

  // 新增一项任务
  handleSubmit(task) {
    var data = this.state.data;
    var id = this.generateId();
    var complete = "false";
    data = data.concat([{
      "id": id,
      "task": task,
      "complete": "false"
    }]);
    this.setState({
      data
    });
  }

  render() {
    var statistics = {
      // 统计任务总数及完成的数量
      todoCount: this.state.data.length || 0,
      todoCompleteCount: this.state.data.filter(function(item) {
        return item.complete === "true";
      }).length
    };

    return (
      <div className="well">
        <h1 className="text-center">React Todo</h1>
        <TodoList data={this.state.data}
          deleteTask={this.handleTaskDelete.bind(this)}
          toggleComplete={this.handleToggleComplete.bind(this)}
          todoCount={statistics.todoCount}
          todoCompleteCount={statistics.todoCompleteCount} />
        <TodoForm submitTask={this.handleSubmit.bind(this)} />
      </div>
    )
  }
};






/*
ReactDOM.render(
  <TodoBox />,
  document.getElementById('todoBox')
);
*/

module.exports = TodoBox;