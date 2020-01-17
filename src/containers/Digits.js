import { connect } from "react-redux";
import DigitsView from "../components/Digits";
import { digitClick } from "../store/expression";
import { updateHistory } from "../store/history";

export const digitClickHandler =  numberClicked => (dispatch, getState) => {
  dispatch(digitClick(numberClicked));
  dispatch(updateHistory(getState().curExpression));
};

const mapDispatchToProps = dispatch => ({
  digitClickHandler: numberClicked => dispatch(digitClickHandler(numberClicked))
});

export default connect(null, mapDispatchToProps)(DigitsView);
