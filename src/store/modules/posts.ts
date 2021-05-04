import { storeActions } from "../../constants";
import HttpRequest from "@/apiHelper";
import _ from "lodash";

const getters = {
  posts: (state: any) => {
    return state.posts;
  },
  postDetail: (state: any) => {
    console.log("state.postDetail", state.postDetail);
    return state.postDetail;
  },
};

const actions = {
  fetchPostData({ commit, dispatch }: any) {
    commit(storeActions.POSTS.FETCH_POST_DATA);
    dispatch("fetchPostDataLoading", true);
  },
  fetchPostDataLoading({ commit }: any, payload: boolean) {
    commit(storeActions.POSTS.FETCH_POST_DATA_LOADING, payload);
  },
  fetchPostDetails({ commit, dispatch }: any, payload: boolean) {
    commit(storeActions.POSTS.FETCH_POST_DETAILS, payload);
    dispatch("fetchPostDataLoading", true);
  },
};

const mutations = {
  [storeActions.POSTS.FETCH_POST_DATA](state: any) {
    const apiRequest = new HttpRequest();
    try {
      apiRequest.request("GET", "/posts", null).then((res: any) => {
        const response = _.get(res, "data");
        const responseStatus = _.get(res, "status");
        if (responseStatus === 200) {
          if (response && response.length > 0) {
            const userData = {
              isLoading: false,
              data: response,
              success: responseStatus ? true : false,
            };
            state.posts = userData;
          }
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  [storeActions.POSTS.FETCH_POST_DATA_LOADING](state: any, payload: any) {
    state.users = {
      isLoading: payload,
    };
  },
  [storeActions.POSTS.FETCH_POST_DETAILS](state: any, payload: any) {
    const apiRequest = new HttpRequest();
    const postIdData = `/posts/${payload.toString()}`;
    try {
      apiRequest.request("GET", postIdData, null).then((res: any) => {
        const response = _.get(res, "data");
        const responseStatus = _.get(res, "status");
        if (responseStatus === 200) {
          if (response) {
            const postData = {
              isLoading: false,
              data: response,
              success: responseStatus ? true : false,
            };
            state.postDetail = postData;
          }
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  },
};

const state = {
  posts: {
    isLoading: false,
    success: false,
    data: null,
  },
  postDetail: {
    isLoading: false,
    success: false,
    data: null,
  },
};

export default {
  getters,
  state,
  actions,
  mutations,
};
