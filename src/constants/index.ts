// app
const storeActions = {
  APPLICATION: {
    IS_LOADER: "IS_LOADER",
  },
  USERS: {
    FETCH_USER_DATA: "FETCH_USER_DATA",
    FETCH_USER_DATA_LOADING: "FETCH_USER_DATA_LOADING",
    FETCH_USER_DETAILS: "FETCH_USER_DETAILS",
  },
  POSTS: {
    FETCH_POST_DATA: "FETCH_POST_DATA",
    FETCH_POST_DATA_LOADING: "FETCH_POST_DATA_LOADING",
    FETCH_POST_DETAILS: "FETCH_POST_DETAILS",
  },
};

const routePaths = {
  ROOT: "/",
  USER_LISTINGS: "/users",
  USER_DETAILS: "/users/:userid",
  POST_LISTINGS: "/posts",
  POST_DETAILS: "/posts/:postid",
  PAGE_NOT_FOUND: "*",
};

export { storeActions, routePaths };
