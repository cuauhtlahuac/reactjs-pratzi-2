import React from "react";
import "./timer.css";

const Timer = (props) => (
         <div className="Timer">
             <p>
                 <span>{props.time} / {props.duration}</span>
                 {/* Habíamos creado el span de abajo pero el reto es que se haga desde el componente padre video-player */}
                 {/* <span>{formattedTime(props.time)} / {formattedTime(props.duration)}</span> */}
             </p>
         </div>
);

export default Timer