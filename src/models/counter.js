import {delay} from 'dva/saga'
import {routerRedux} from 'dva/router'
export default{
    namespace:'counter',
    state:{
        count:1000,
        yj:500
    },
    subscriptions:{
        setup({dispatch,history}){
        window.onresize=()=>{
        dispatch({type:"add"})
        }
        },
        onClick({dispatch}){
        document.addEventListener('click',()=>{
            dispatch({type:'add'})
        })
        },
        // setupHistory({dispatch,history}){
        // history.listen(location=>{
        //     console.log(location)
        // })
        // }
    },
    
    effects: {
        *asyncAdd({ payload }, { call, put,select }) { 
            // const y =yield select(state=>state.counter)
            // const y =yield select(({counter})=>counter)
            // const y= yield select (_=>_.counter)
            // const {counter} = yield select(_=>_)
            console.log('y',payload)
            yield call(delay,2000)
          yield put({ type: 'add' });
          yield put(routerRedux.push('/'))
        },
      },

    reducers:{
        add(state,payload){
            console.log(payload)
            return{
                count:state.count+2,
                yj:state.yj-2
            }
        }
      
    }
   
   
}