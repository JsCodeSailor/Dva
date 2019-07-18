import React from 'react';
import { Button } from 'antd';
import {withRouter,Link,routerRedux} from 'dva/router'
import PropTypes from 'prop-types'
 

const Counter = ({counter,dispatch,history,yj},context) => {
  return (
    <div>
        <h3>counter</h3>
      {counter}
     
      <Link to='/'> Link</Link>
       <Button onClick={()=>dispatch(routerRedux.push('/'))}>routerRedux </Button>
      <br />
      {yj}
      <Button onClick={()=>{context.router.history.push('/')}}>context</Button>
      <Button onClick={()=>{history.push('/')}}>go Back</Button>
      <Button onClick={()=>{dispatch({type:"counter/add",payload:100})}}>+</Button>
      <Button onClick={()=>{dispatch({type:"counter/asyncAdd",payload:'payload'})}}>async+ </Button>
    </div>
  );
};
Counter.contextTypes={
  router:PropTypes.object
}


export default withRouter(Counter);
