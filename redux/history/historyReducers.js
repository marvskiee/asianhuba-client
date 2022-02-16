import { SUCCESS_WATCH_HISTORY_STORAGE } from "./historyTypes";

const initialState = {
  history: [],
  loading: true,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_WATCH_HISTORY_STORAGE:
      return {
        ...state,
        history: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default historyReducer;
