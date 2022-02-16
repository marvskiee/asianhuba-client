import {
  SUCCESS_DRAMA_RESULT,
  FAILED_DRAMA_RESULT,
  REQUEST_DRAMA_RESULT,
} from "./homeTypes";

import config from "../../config/axios_config";

export const requestDramaResult = () => {
  return {
    type: REQUEST_DRAMA_RESULT,
  };
};
export const failedDramaResult = () => {
  return {
    type: FAILED_DRAMA_RESULT,
  };
};
export const successDramaResult = (data) => {
  return {
    type: SUCCESS_DRAMA_RESULT,
    payload: data,
  };
};

export const homeResult = () => (dispatch) => {
  dispatch(requestDramaResult());
  const home = async () => {
    await config
      .get("/")
      .then((res) => {
        dispatch(successDramaResult(res.data));
      })
      .catch((err) => {
        dispatch(failedSearchResult());
      });
  };
  home();
};
