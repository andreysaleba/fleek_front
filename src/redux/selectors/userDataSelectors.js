export const isUserAuthorized = (state) => state.userData.isAuthorized;

export const getLoadingState = (state) => state.userData.loading;

export const getErrorMessage = (state) => state.userData.error;

export const getUserAPIKey = (state) => state.userData.apiKey;