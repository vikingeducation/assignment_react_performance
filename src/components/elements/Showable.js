import React from "react";

class Showable extends React.PureComponent {
  render() {
    const { show, children } = this.props;
    if (!show) {
      return null;
    }
    return <div>{children}</div>;
  }
}
export default Showable;
