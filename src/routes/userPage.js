import React from 'react';
import {connect}  from 'dva'
import {Button} from 'antd'


const UserPage =(props)=>{
const {isFetching,error,user} =props.user;
const {dispatch} =props

let data;
if(error){  
data=error;
}else if(isFetching){
    data='Loading...'
}else{
    data =user && user.data[0].name
    console.log(data,'dara')
}

    return(
        <div>
            {data}
        <Button onClick={()=>dispatch({type:'user/fetch'})}>UserPage</Button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps)(UserPage)

