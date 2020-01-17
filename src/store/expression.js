import { createSlice } from "@reduxjs/toolkit";

// import { DIGIT_CLICK_ACTION, CLICKED_DIGIT_KEY } from "./digit";

// export const EXPRESSION_UPDATE_ACTION = "EXPRESSION_UPDATE_ACTION";
// export const NEW_EXPRESSION_KEY = "NEW_EXPRESSION_KEY";

// export const updateExpression = newExp => ({
//   type: EXPRESSION_UPDATE_ACTION,
//   payload: { [NEW_EXPRESSION_KEY]: newExp }
// });

// export const expressionReducer = (state = 0, { type, payload }) => {
//   switch (type) {
//     case EXPRESSION_UPDATE_ACTION:
//       return payload[NEW_EXPRESSION_KEY] || payload[NEW_EXPRESSION_KEY] === 0
//         ? payload[NEW_EXPRESSION_KEY]
//         : state;
//     case DIGIT_CLICK_ACTION:
//       if (!state) {
//         return payload[CLICKED_DIGIT_KEY];
//       }
//       return `${state}${payload[CLICKED_DIGIT_KEY]}`;
//     default:
//       return state;
//   }
// };

export const slice = createSlice({
  name: "expression",
  initialState: "0",
  reducers: {
    updateExpression: (state, action) => {
      if (action.payload || action.payload == "0") {
        return action.payload;
      }
      return state;
    },
    digitClick: (state, action) => {
      if (!state || state === "0") {
        return action.payload;
      }
      return `${state}${action.payload}`;
    }
  }
});

export const { updateExpression, digitClick } = slice.actions;
