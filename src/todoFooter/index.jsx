var React = require( 'react' );

class TodoFooter extends React.Component {
  constructor(props){
    super(props);
  }
   render() {
    return (
      <li className="list-group-item">{this.props.todoCompleteCount}已完成 / {this.props.todoCount}总数</li>
    )
  }
};

module.exports = TodoFooter