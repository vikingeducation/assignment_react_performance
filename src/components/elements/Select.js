import React from "react";

class Select extends React.PureComponent {
  render() {
    const { options, ...restOfProps } = this.props;
    const optionElements = options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
    return (
      <select className="form-control" {...restOfProps}>
        {optionElements}
      </select>
    );
  }
}
export default Select;
