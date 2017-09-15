import React from "react";

class Alert extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { type, children } = this.props;
    return (
      <div className={`alert alert-${type}`} role="alert">
        {children}
      </div>
    );
  }
}
export default Alert;
