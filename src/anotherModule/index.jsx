var React = require( 'react' );
class Another extends React.Component {
  constructor(props){
    super(props);
  }
   render() {
    return (
      <div className="another">another module</div>
    )
  }
};

module.exports = Another;