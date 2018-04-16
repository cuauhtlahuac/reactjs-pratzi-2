import React from 'react';

function Icon(props){
    const {
        color,
        size
    } = props
    return(
        <svg height={size} width={size} viewBox="0 0 32 32" fill={color}>
             {props.children}
        </svg>
    )
}
export default Icon;