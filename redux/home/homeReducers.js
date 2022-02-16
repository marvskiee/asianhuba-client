import {
  SUCCESS_DRAMA_RESULT,
  FAILED_DRAMA_RESULT,
  REQUEST_DRAMA_RESULT,
} from "./homeTypes";

const initialState = {
  loading: true,
  result: null,
};

const homeReducers = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DRAMA_RESULT:
      return {
        ...state,
        loading: true,
      };
    case FAILED_DRAMA_RESULT:
      return {
        ...state,
        result: null,
        loading: false,
      };
    case SUCCESS_DRAMA_RESULT:
      return {
        ...state,
        result: action.payload,
        loading: false,
        active: "result",
      };
    default:
      return state;
  }
};
export default homeReducers;
