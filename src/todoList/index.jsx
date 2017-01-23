var  React  = require( 'react' );
var  TodoItem =require( './../todoItem/index.jsx')
var TodoFooter = require( './../todoFooter/index.jsx' )
class TodoList extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    var taskList = this.props.data.map(function(listItem) {
      return (
        <TodoItem
          taskId={listItem.id}
          key={listItem.id}
          task={listItem.task}
          complete={listItem.complete}
          deleteTask={this.props.deleteTask}
          toggleComplete={this.props.toggleComplete} />
      )
    }, this);

    return (
      <ul className="list-group">
          {taskList}
          <TodoFooter todoCount={this.props.todoCount} todoCompleteCount={this.props.todoCompleteCount} />
        </ul>
    );
  }
};

module.exports = TodoList