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

const initialState = {
  email: '',
  jwtToken: '',
  apiKey: '',
  isAuthorized: false,
  loading: false,
  error: '',
  apiKeyLoading: false,
  apiKeyError: '',
};

const userDataReducer = (state = initialState, action) => {
  if (action.error === 'Unauthorized')
    return {
      ...state,
      isAuthorized: false,
    };

  switch (action.type) {
    case CHECK_JWT_TOKEN_STARTED:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case CHECK_JWT_TOKEN_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        loading: false,
      };
    case CHECK_JWT_TOKEN_ERROR:
      return {
        ...state,
        isAuthorized: false,
        loading: false,
        error: action.error,
      };
    case AUTHORIZATION_STARTED:
      return { ...state, loading: true, error: '' };
    case AUTHORIZATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthorized: true,
        email: action.email,
        jwtToken: action.jwtToken,
      };
    case AUTHORIZATION_ERROR:
      return { ...state, loading: false, error: action.error };
    case LOAD_API_KEY_STARTED:
      return { ...state, apiKeyLoading: true, apiKeyError: '', apiKey: '' };
    case LOAD_API_KEY_SUCCESS:
      return { ...state, apiKeyLoading: false, apiKey: action.apiKey };
    case LOAD_API_KEY_ERROR:
      return { ...state, apiKeyLoading: false, apiKeyError: action.error };
    case CREATE_API_KEY_STARTED:
      return { ...state, apiKeyLoading: true, apiKeyError: '' };
    case CREATE_API_KEY_SUCCESS:
      return { ...state, apiKeyLoading: false, apiKey: action.apiKey };
    case CREATE_API_KEY_ERROR:
      return { ...state, apiKeyLoading: false, apiKeyError: action.error };
    case DELETE_API_KEY_STARTED:
      return { ...state, apiKeyLoading: true, apiKeyError: '' };
    case DELETE_API_KEY_SUCCESS:
      return { ...state, apiKeyLoading: false, apiKey: action.apiKey };
    case DELETE_API_KEY_ERROR:
      return { ...state, apiKeyLoading: false, apiKeyError: action.error };
    default:
      return state;
  }
};

export default userDataReducer;
