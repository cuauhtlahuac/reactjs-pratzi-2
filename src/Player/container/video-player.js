import React, { Component } from 'react';
import VideoPlayerLayout from '../component/video-player-layout';
import Title from '../component/title';
import Video from '../component/video';
import PlayPause from '../component/play-pause';

class VideoPlayer extends Component{
    state = {
        pause: true,
        reproduction: true,       
    }
    togglePlay = (event) =>{
        this.setState({
            pause: !this.state.pause,
        });
    }    
    render(){
        return(
            <VideoPlayerLayout>
                <Title title='Ta Chido el Video'/>
                <Video
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                    autoPlay={this.state.reproduction}
                />
                <PlayPause
                    pause={this.state.pause}
                    handleClick={this.togglePlay}
                />
            </VideoPlayerLayout>    
        )
    }
}

export default VideoPlayer;

