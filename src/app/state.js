import * as safeStorage from '../utils/safeStorage'

const initialAppState = {
  auth: {
      loggedIn: safeStorage.getItem("loggedIn"),
      accessToken: safeStorage.getItem("token"),
  },
  form: {
      projectIds: safeStorage.getItem("projectIds") ? safeStorage.getItem("projectIds") : "",
      hashtags: safeStorage.getItem("hashtags") ? safeStorage.getItem("hashtags") : "",
  }
};

export const saveState = (state) => {
try {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('state', serializedState);
} catch {
  // log errors
}
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return initialAppState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
