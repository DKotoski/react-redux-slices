import { connect } from "react-redux";
import HistoryView from "../components/History";
import { toggleHistory } from "../store/history";
import { updateExpression } from "../store/expression";

export const historyItemClickHandler = dispatch => history => {
  dispatch(updateExpression(history));
  dispatch(toggleHistory());
};

const mapDispatchToProps = dispatch => ({
  historyItemClickHandler: historyItemClickHandler(dispatch),
  toggleHistory: () => dispatch(toggleHistory())
});

const mapStateToProps = ({ history: { showHistory, historyArray } }) => {
  return {
    showHistory: showHistory,
    history: historyArray
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HistoryView);
