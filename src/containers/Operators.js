import { connect } from "react-redux";
import OperatorsView from "../components/Operators";
import { updateExpression } from "../store/expression";
import {updateHistory} from "../store/history";

export const operatorClickHandler = type => (dispatch, getState) => {
  var newExp = `${getState().curExpression} ${type}`;
  dispatch(updateExpression(`${newExp} `));
  dispatch(updateHistory(newExp))
};

export const calculateExpression = (dispatch, getState) => {
  /* eslint-disable */
  // This rule is important in production apps!
  // Read more: https://eslint.org/docs/rules/no-eval
  // To simplify the functionality in this course we use eval
  const calcFunc = eval;
  /* eslint-enable */
  try {
    var res = calcFunc(getState().curExpression);
    dispatch(updateExpression(res));
    dispatch(updateHistory(res));
  } catch (e) {
    console.error("Error: Incorrect Expression of digits & operators :(");
  }
};

const mapDispatchToProps = dispatch => ({
  operatorClickHandler: operator => dispatch(operatorClickHandler(operator)),
  calculateExpression: ()=> dispatch(calculateExpression)
});

export default connect(null, mapDispatchToProps)(OperatorsView);
