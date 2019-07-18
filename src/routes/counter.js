import React,{Component} from 'react'
import Counters from '../components/Counter';
import {connect} from 'dva'

 class Counter extends Component{
     constructor(props){
         super(props);
         console.log('props',props)
     }
    render(){
        return(
            <div>
                <Counters 
                dispatch={this.props.dispatch}
                history={this.props.history}
                yj={this.props.count.yj}
                />
            </div>
        )
    }
}

const mapDispathToprops=(state)=>{
    return{
        count:state.counter
    }
}


export default connect(mapDispathToprops)(Counter) 