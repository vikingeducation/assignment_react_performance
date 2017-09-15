import React from "react";

class InputGroup extends React.PureComponent {
  constructor(props) {
    super(props);
  }
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
