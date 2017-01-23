var React = require( 'react' );


 class TodoItem extends React.Component{
  constructor(props){
    super(props);
  }
  toggleComplete() {
    this.props.toggleComplete(this.props.taskId);
  }

  deleteTask() {
    this.props.deleteTask(this.props.taskId);
  }

  // 鼠标移入显示删除按钮
  handleMouseOver() {
    
   this.refs.deleteBtn.style.display = "inline";
  }

  handleMouseOut() {
   this.refs.deleteBtn.style.display = "none";
  }

  render() {
    var task = this.props.task;
    //var that = this ;
    var classes = "list-group-item"
    var itemChecked;
    if (this.props.complete === "true") {
      task = <s>{task}</s>
      itemChecked = true;
      classes += " list-group-item-success"
    } else {
      itemChecked = false;
    }

    return (
      <li className={classes}
        onMouseOver={this.handleMouseOver.bind(this)}
        onMouseOut={this.handleMouseOut.bind(this)}>
        <input type="checkbox" checked={itemChecked} onChange={this.toggleComplete.bind(this)} className="pull-left" />
        {task}
        <div className="pull-right">
          <button type="button" className="btn btn-xs close" onClick={this.deleteTask.bind(this)} ref="deleteBtn">删除</button>
        </div>
      </li>
    );
  }
};

module.exports = TodoItem