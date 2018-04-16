import React, { Component } from "react"

class Video extends Component{
    render(){
        return(
           <div> 
            <video
            src={this.props.src}
            autoPlay={this.props.autoPlay}
        />
        </div>
        )
    }
}

export default Video