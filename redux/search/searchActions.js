import {
  FAILED_SEARCH_RESULT,
  REQUEST_SEARCH_RESULT,
  SUCCESS_SEARCH_RESULT,
  SUCCESS_SEARCH_HISTORY_STORAGE,
  CLEAR_SEARCH,
} from "./searchTypes";

import axios from "axios";
import config from "../../config/axios_config";

export const requestSearchResult = () => {
  return {
    type: REQUEST_SEARCH_RESULT,
  };
};
export const failedSearchResult = () => {
  return {
    type: FAILED_SEARCH_RESULT,
  };
};
export const successSearchResult = (data) => {
  return {
    type: SUCCESS_SEARCH_RESULT,
    payload: data,
  };
};

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH,
  };
};

export const successSearchHistoryStorage = (data) => {
  return {
    type: SUCCESS_SEARCH_HISTORY_STORAGE,
    payload: data,
  };
};

export const clearSearchResult = () => (dispatch) => {
  dispatch(clearSearch());
};

let cancelToken;
export const searchResult = (query, page) => (dispatch) => {
  const search = async () => {
    dispatch(requestSearchResult());
    if (cancelToken) {
      cancelToken.cancel("cancelled");
    }
    cancelToken = axios.CancelToken.source();
    await config
      .get(`/search/${query}/${page}`, { cancelToken: cancelToken.token })
      .then((res) => {
        let keyword = query;
        dispatch(successSearchResult({ page, keyword, result: res.data }));
      })
      .catch((err) => {
        // console.log(err.message);
        if (err.message === "cancelled") {
          dispatch(requestSearchResult());
        } else {
          dispatch(failedSearchResult());
        }
      });
  };
  search();
};

export const setSearchHistoryMany = (data) => (dispatch) => {
  dispatch(successSearchHistoryStorage(data));
};
