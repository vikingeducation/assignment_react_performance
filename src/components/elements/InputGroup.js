import React from "react";

class InputGroup extends React.PureComponent {
  render() {
    const { name, labelText, children } = props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{labelText}</label>
        {children}
      </div>
    );
  }
}
export default InputGroup;
