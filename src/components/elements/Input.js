import React from "react";

class Input extends React.PureComponent {
  render() {
    const classNames = `form-control ${this.props.className}`;
    return <input className={classNames} {...this.props} />;
  }
}
export default Input;
