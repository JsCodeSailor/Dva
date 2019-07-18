import axios from 'axios';

export default {
  namespace: 'user',
  state: {
    isFetching: false,
    error: null,
    user: null,
  },
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch(_, { call, put }) {  // eslint-disable-line
      yield put({ type: 'start' });
      try{
        const user = yield call(axios.get,"https://5cb47027bbf7b50014cab9a0.mockapi.io/Alarm");
        yield put({type:"fetch/success",user})
      }catch(e){
        yield put({type:"fetch/error",error:e.message})
      };
     
    },
  },

  reducers: {
    start(state, action) {
      return {
        isFetching: true,
        error: null,
        user: null,
      };
    },
    'fetch/success'(state,action){
      return{
        isFetching: false,
        error: null,
        user: action.user,
      }
    },
    "fetch/error"(_,action){
      return{
        isFetching:false,
        error: action.error,
        user:null,
      }
    }
  },

};
