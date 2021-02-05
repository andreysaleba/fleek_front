import {
  AUTHORIZATION_ERROR,
  AUTHORIZATION_STARTED,
  AUTHORIZATION_SUCCESS,
  CHECK_JWT_TOKEN_ERROR,
  CHECK_JWT_TOKEN_STARTED,
  CHECK_JWT_TOKEN_SUCCESS,
  CREATE_API_KEY_ERROR,
  CREATE_API_KEY_STARTED,
  CREATE_API_KEY_SUCCESS,
  DELETE_API_KEY_ERROR,
  DELETE_API_KEY_STARTED,
  DELETE_API_KEY_SUCCESS,
  LOAD_API_KEY_ERROR,
  LOAD_API_KEY_STARTED,
  LOAD_API_KEY_SUCCESS,
} from '../types/userDataTypes';
import AuthAPI from '../../api/auth';
import KeysAPI from '../../api/apiKeys';

const checkJwtTokenStarted = () => ({ type: CHECK_JWT_TOKEN_STARTED });
const checkJwtTokenSuccess = () => ({ type: CHECK_JWT_TOKEN_SUCCESS });
const checkJwtTokenError = (error) => ({ type: CHECK_JWT_TOKEN_ERROR, error });
export const checkJwtToken = () => async (dispatch, getState) => {
  dispatch(checkJwtTokenStarted());

  try {
    const {
      userData: { jwtToken },
    } = getState();
    await AuthAPI.checkToken({ jwtToken });
    dispatch(checkJwtTokenSuccess());
  } catch (error) {
    dispatch(checkJwtTokenError(''));
  }
};

const authorizationStarted = () => ({ type: AUTHORIZATION_STARTED });
const authorizationSuccess = (jwtToken, email) => ({
  type: AUTHORIZATION_SUCCESS,
  jwtToken,
  email,
});
const authorizationError = (error) => ({ type: AUTHORIZATION_ERROR, error });
export const authorize = (email, password) => async (dispatch, state) => {
  dispatch(authorizationStarted());

  try {
    const data = await AuthAPI.authorize({ email, password });
    dispatch(authorizationSuccess(data.token, email));
  } catch (error) {
    dispatch(authorizationError('Wrong credentials'));
  }
};

const loadAPIKeyStarted = () => ({ type: LOAD_API_KEY_STARTED });
const loadAPIKeySuccess = (apiKey) => ({ type: LOAD_API_KEY_SUCCESS, apiKey });
const loadAPIKeyError = (error) => ({ type: LOAD_API_KEY_ERROR, error });
export const loadAPIKey = () => async (dispatch, getState) => {
  dispatch(loadAPIKeyStarted());

  try {
    const {
      userData: { jwtToken, email },
    } = getState();
    const data = await KeysAPI.getKey({ email, jwtToken });
    dispatch(loadAPIKeySuccess(data.apiKey));
  } catch (error) {
    dispatch(loadAPIKeyError(error.message));
  }
};

const createAPIKeyStarted = () => ({ type: CREATE_API_KEY_STARTED });
const createAPIKeySuccess = (apiKey) => ({
  type: CREATE_API_KEY_SUCCESS,
  apiKey,
});
const createAPIKeyError = (error) => ({ type: CREATE_API_KEY_ERROR, error });
export const createAPIKey = () => async (dispatch, getState) => {
  dispatch(createAPIKeyStarted());

  try {
    const {
      userData: { jwtToken, email },
    } = getState();
    const data = await KeysAPI.addKey({ jwtToken, email });
    dispatch(createAPIKeySuccess(data.apiKey));
  } catch (error) {
    dispatch(createAPIKeyError(error.message));
  }
};

const deleteAPIKeyStarted = () => ({ type: DELETE_API_KEY_STARTED });
const deleteAPIKeySuccess = (apiKey) => ({
  type: DELETE_API_KEY_SUCCESS,
  apiKey,
});
const deleteAPIKeyError = (error) => ({ type: DELETE_API_KEY_ERROR, error });
export const deleteAPIKey = () => async (dispatch, getState) => {
  dispatch(deleteAPIKeyStarted());

  try {
    const {
      userData: { jwtToken, email },
    } = getState();
    const data = await KeysAPI.deleteKey({ jwtToken, email });
    dispatch(deleteAPIKeySuccess(data.apiKey));
  } catch (error) {
    dispatch(deleteAPIKeyError(error.message));
  }
};
