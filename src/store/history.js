import { createSlice } from "@reduxjs/toolkit";

// import { EXPRESSION_UPDATE_ACTION, NEW_EXPRESSION_KEY } from "./expression";
// export const TOGGLE_HISTORY_ACTION = "TOGGLE_HISTORY_ACTION";
// export const UPDATE_HISTORY_ACTION = "UPDATE_HISTORY_ACTION";
// export const HISTORY_ITEM_KEY = "HISTORY_ITEM_KEY";

// export const toggleHistory = () => ({ type: TOGGLE_HISTORY_ACTION });

// export const showHistoryReducer = (state = false, { type }) => {
//   switch (type) {
//     case TOGGLE_HISTORY_ACTION:
//       return !state;
//     default:
//       return state;
//   }
// };

export const isNotInHistory = (expression, history) =>
  (expression || expression === 0) &&
  history.filter(i => i === expression.toString().trim()).length === 0;

export const slice = createSlice({
  name: "history",
  initialState: {
    historyArray: [],
    showHistory: false
  },
  reducers: {
    updateHistory: (state, action) => {
      if (isNotInHistory(action.payload, state.historyArray)) {
        state.historyArray = [
          ...state.historyArray,
          action.payload.toString().trim()
        ];
      }
      return state;
    },
    toggleHistory: state => {
      state.showHistory = !state.showHistory;
    }
  }
});

export const { updateHistory, toggleHistory } = slice.actions;
// export const historyReducer = (state = [], { type, payload }) => {
//   switch (type) {
//     case EXPRESSION_UPDATE_ACTION:
//       return addHistoryItemAction(payload[NEW_EXPRESSION_KEY], state);
//     case UPDATE_HISTORY_ACTION:
//       return addHistoryItemAction(payload[HISTORY_ITEM_KEY], state);
//     default:
//       return state;
//   }
// };
