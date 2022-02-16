import {
  FAILED_SEARCH_RESULT,
  REQUEST_SEARCH_RESULT,
  SUCCESS_SEARCH_RESULT,
  CLEAR_SEARCH,
  SUCCESS_SEARCH_HISTORY_STORAGE,
} from "./searchTypes";

const initialState = {
  result: null,
  page: 1,
  loading: false,
  keyword: "",
  history: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_SEARCH:
      return {
        ...state,
        result: null,
      };

    case REQUEST_SEARCH_RESULT:
      return {
        ...state,
        loading: true,
      };
    case FAILED_SEARCH_RESULT:
      return {
        ...state,
        result: null,
        loading: false,
      };
    case SUCCESS_SEARCH_RESULT:
      return {
        ...state,
        result: action.payload.result,
        page: action.payload.page,
        keyword: action.payload.keyword,
        loading: false,
      };
    case SUCCESS_SEARCH_HISTORY_STORAGE:
      return {
        ...state,
        history: action.payload,
      };
    default:
      return state;
  }
};
export default searchReducer;
