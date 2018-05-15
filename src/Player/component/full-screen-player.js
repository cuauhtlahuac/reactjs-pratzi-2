import React from "react";
import FullScreen from "../../icons/components/full-screen"
import "../component/full-screen-player.css"

function FullScreenPlayer(props){
    return(
        <div
        className="FullScreen"
        onClick={props.handleClick}
        >
           <FullScreen
             size={25}
             color="white"
            />
        </div>
    )
}

export default FullScreenPlayer