import { storeActions } from "../../constants";

const getters = {
  isLoader: (state: any) => {
    return state.isLoader;
  },
};

const actions = {
  isLoading({ commit }: any, payload: any) {
    commit(storeActions.APPLICATION.IS_LOADER, payload);
  },
};

const mutations = {
  [storeActions.APPLICATION.IS_LOADER](state: any, isLoader: any) {
    state.isLoader = isLoader;
  },
};

const state = {
  isLoader: {
    isVisible: false,
    message: "",
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
