import { storeActions } from "../../constants";
import HttpRequest from "@/apiHelper";
import _ from "lodash";

const getters = {
  users: (state: any) => {
    return state.users;
  },
  userDetail: (state: any) => {
    return state.userDetail;
  },
};

const actions = {
  fetchUserData({ commit, dispatch }: any) {
    commit(storeActions.USERS.FETCH_USER_DATA);
    dispatch("fetchUserDataLoading", true);
  },
  fetchUserDataLoading({ commit }: any, payload: boolean) {
    commit(storeActions.USERS.FETCH_USER_DATA_LOADING, payload);
  },
  fetchUserDetails({ commit, dispatch }: any, payload: boolean) {
    commit(storeActions.USERS.FETCH_USER_DETAILS, payload);
    dispatch("fetchUserDataLoading", true);
  },
};

const mutations = {
  [storeActions.USERS.FETCH_USER_DATA](state: any) {
    const apiRequest = new HttpRequest();
    try {
      apiRequest.request("GET", "/users", null).then((res: any) => {
        const response = _.get(res, "data");
        const responseStatus = _.get(res, "status");
        if (responseStatus === 200) {
          if (response && response.length > 0) {
            const userData = {
              isLoading: false,
              data: response,
              success: responseStatus ? true : false,
            };
            state.users = userData;
          }
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  },
  [storeActions.USERS.FETCH_USER_DATA_LOADING](state: any, payload: any) {
    state.users = {
      isLoading: payload,
    };
  },
  [storeActions.USERS.FETCH_USER_DETAILS](state: any, payload: any) {
    const apiRequest = new HttpRequest();
    const userIdData = `/users/${payload.toString()}`;
    try {
      apiRequest.request("GET", userIdData, null).then((res: any) => {
        const response = _.get(res, "data");
        const responseStatus = _.get(res, "status");
        if (responseStatus === 200) {
          if (response) {
            const userData = {
              isLoading: false,
              data: response,
              success: responseStatus ? true : false,
            };
            console.log("userData", userData);
            state.userDetail = userData;
          }
        }
      });
    } catch (e) {
      console.log("error", e);
    }
  },
};

const state = {
  users: {
    isLoading: false,
    success: false,
    data: null,
  },
  userDetail: {
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
