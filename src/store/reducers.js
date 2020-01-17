import * as ExpressionStore from "./expression";
import * as HistoryStore from "./history";

const reducers = {
  curExpression: ExpressionStore.slice.reducer,
  history: HistoryStore.slice.reducer
};

export { reducers };
