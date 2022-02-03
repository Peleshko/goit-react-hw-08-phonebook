const getIsLoggedIn = state => state.auth.isLoggedIn;
const getLoading = state => state.auth.isLoader;
const getUsername = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getIsLoggedIn,
  getLoading,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
