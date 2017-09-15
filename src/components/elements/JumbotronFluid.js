import React from "react";

class JumbotronFluid extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { heading, lead } = this.props;
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>{heading}</h1>
          <p className="lead">{lead}</p>
        </div>
      </div>
    );
  }
}
export default JumbotronFluid;
