import React from "react";

class Showable extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    if (!show) {
      return null;
    }
    const { show, children } = this.props;
    return <div>{children}</div>;
  }
}
export default Showable;
