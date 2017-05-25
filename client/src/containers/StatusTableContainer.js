import { connect } from "react-redux";
import StatusTable from "../components/StatusTable";

const mapStateToProps = state => {
  return {
    money: state.money
  };
};

export default connect(mapStateToProps, null)(StatusTable);
