import { SUCCESS_WATCH_HISTORY_STORAGE } from "./historyTypes";

export const successWatchHistoryStorage = (data) => {
  return {
    type: SUCCESS_WATCH_HISTORY_STORAGE,
    payload: data,
  };
};

export const setWatchHistoryMany = (data) => (dispatch) => {
  dispatch(successWatchHistoryStorage(data));
};
