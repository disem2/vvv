// initial state
// shape: [{ id, quantity }]
const state = {
  counter: 0
};

// getters
const getters = {
  currentCount: (state, getters, rootState) => {
    return state.counter
  }
}

// actions
const actions = {
  increase ({ commit, state }, products) {
    commit('increase');
  },
  setCounter ({ commit, state }, payload) {
    console.log(payload);
    commit('setCounter', payload);
  }
};

// mutations
const mutations = {
  increase (state) {
    state.counter++;
  },
  
  reset (state) {
    state.counter = 0;
  },
  
  setCounter (state, count) {
    console.log(count);
    state.counter = count;
  },
  
  decrease (state) {
    state.counter--;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
