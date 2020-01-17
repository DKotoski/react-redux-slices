import { connect } from "react-redux";
import Calculator from "./components/Calculator";
import "./App.css";

const mapStateToProps = ({curExpression, history}) => {
  return {
    curExpression: curExpression,
    history: history
  };
};

export default connect(mapStateToProps)(Calculator);
