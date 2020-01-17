import { connect } from "react-redux";
import ControlPanelView from "../components/ControlPanel";
import { toggleHistory } from "../store/history";
import {updateExpression} from "../store/expression";

export const showHistory = dispatch => dispatch(toggleHistory());

export const clearDisplay = () => {
  updateExpression("0");
};

export const removeOneChar = (dispatch, getState) => {
  const curExpression = String(getState().curExpression);
  const newExpWithRemovedChar = curExpression
    .toString()
    .trim()
    .substring(0, curExpression.length - 1);

  return dispatch(updateExpression(
    newExpWithRemovedChar === "" ? 0 : newExpWithRemovedChar
  ));
};

const mapDispatchToProps = dispatch => ({
  showHistory: () => dispatch(toggleHistory()),
  clearDisplay: () => dispatch(updateExpression(0)),
  removeOneChar: () => dispatch(removeOneChar)
});

export default connect(null, mapDispatchToProps)(ControlPanelView);
