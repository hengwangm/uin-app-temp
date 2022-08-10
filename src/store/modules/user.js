// 用户
const state = {
  token: uni.getStorageSync('token') || '',
  isLogin: uni.getStorageSync('isLogin') || false, // 是否登陆
  userInfo: uni.getStorageSync('userInfo') || {}, // 用户信息
};

const getters = {
  token: (state) => state.token,
  isLogin: (state) => state.isLogin,
  userInfo: (state) => state.userInfo,
};

const actions = {};

const mutations = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
