import React from 'react';
import "./video-player-layout.css"

const VideoPlayerLayout = (props) => (
<div 
className='VideoPlayer'
//setear la referencia a este elemento que envuelve todo el reproductor
ref={props.setRef}
>
    {props.children}
</div>
)

export default VideoPlayerLayout