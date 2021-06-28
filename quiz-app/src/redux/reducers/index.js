import { combineReducers } from "redux";
import quiz from "./quiz.js";

const rootReducer = (state, action) => {
  switch (action.type) {
    default: {
      const combinedReducer = combineReducers({
        quiz,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
