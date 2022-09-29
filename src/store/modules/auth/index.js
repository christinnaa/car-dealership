import axios from "axios";
import router from "../../../router/index";
import { API_URL } from "../../../config/dev.env";

export default {
  state: {
    loggedIn: false,
    user: {},
  },
  getters: {
    fetchUser: (state) => {
      return state.user;
    },
  },

  actions: {
    async login({ commit }, user) {
      return await axios
        .post(`${API_URL}/login`, {
          email: user.email,
          password: user.password,
        })
        .then((response) => {
          if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data));
            router.push("/dashboard");
          }

          commit("loginSuccess", localStorage.getItem("user"));
          return response.data;
        })
        .catch((error) => {
          commit("loginFailure", { user: null });
          console.log("Invalid credentials!", error);
          return error.message;
        });
    },
    logout({ commit }) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      commit("logout");
    },
  },

  mutations: {
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
    registerSuccess(state) {
      state.status.loggedIn = false;
    },
    registerFailure(state) {
      state.status.loggedIn = false;
    },
  },
};
