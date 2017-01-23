var React = require( 'react' );
var  ReactDOM = require( 'react-dom' );
 class TodoForm extends React.Component {
  constructor(props){
    super(props);
  }

  submitTask(e) {
    e.preventDefault();
    var task = ReactDOM.findDOMNode(this.refs.task).value.trim();
    if (!task) {
      return;
    }
    this.props.submitTask(task);
    ReactDOM.findDOMNode(this.refs.task).value = "";
  }

  render() {
    return (
      <div>
        <hr />
        <form className="form-horizontal" onSubmit={this.submitTask.bind(this)}>
          <div className="form-group">
            <label for="task" className="col-md-2 control-label">Task</label>
            <div className="col-md-10">
              <input type="text" id="task" ref="task" className="form-control" placeholder="你想做点什么"></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-right">
              <input type="submit" value="Save Task" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    )
  }


};

module.exports = TodoForm