class Input extends React.PureComponent {
  render() {
    const { type, color, children, onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={`btn btn-${color}`}>
        {children}
      </button>
    );
  }
}
export default Input;
