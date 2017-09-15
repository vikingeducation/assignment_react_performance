import React from "react";

class Table extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { headers, rows } = this.props;
    return (
      <table className="table table-striped table-condensed">
        <thead>
          <tr>{headers.map(name => <th key={name}>{name}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={`row${i}`}>
              {headers.map(name => <td key={name}>{row[name]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
export default Table;
