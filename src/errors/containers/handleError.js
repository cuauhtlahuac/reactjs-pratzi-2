import React, { Component } from 'React';
import RegularError from '../components/regular-error';

class HandleError extends Component{
    state = {
        handleError: false,
        error1: null,
        info: null    
    }
    componentDidCatch(error, info){
        this.setState({
            handleError: true,
            error1: error,
            info: info
        })
        //envía este error a un servicio como sentry
    }
    render(){
        console.log("ERROR: " + this.state.error1 + "INFO: " + this.state.info)
        if (this.state.handleError){
        return(
            <div style={{color: "white"}}>
                <RegularError/>
            </div>
        )
        }
        return(this.props.children)
    }
}

export default HandleError