import React, { Component } from 'react';

import VideoPlayerLayout from '../component/video-player-layout';
import Title from '../component/title';
import Video from '../component/video';
import PlayPause from '../component/play-pause';
import Timer from "../component/timer";
import Controls from '../component/video-player-controls';
//Aqui se llamo a la funcion formattedTime de un archivo js
import formattedTime from "../../Utilities/utilities";
import ProgressBar from "../component/progress-bar";
import Spinner from "../component/spinner";
import Volume from "../component/volume";
import FullScreenPlayer from '../component/full-screen-player'

class VideoPlayer extends Component{
    //aqui se asigna el valor boolean de pause, que afectara tanto al componente que contiene play pause, como
    //la reproduccion del video
    state = {
        pause: false,
        //estado inicial de duration.
        duration: 0,
        time: "0 : 00",
        timeFloat: 0,
        durationFloat: 0,
        loading: false,
    }
    //togglePlay lo que hace es cambiar el estado de pause cuando el evento es accionado,
    //si pause state es true cuando el boton de playpause se acciones el valor de pause se cambia a false
    togglePlay = (event) =>{
        this.setState({
            pause: !this.state.pause,
        });
    }
    //este es metodo de componente es llamado una vez que los childrenElements y nuestras instancias de componentes son montados
    //esto permite renderizar algo nuevo, en este caso una vez que el estado de pause se asigno, se puede
    //volver a llamar y asignale un nuevo valor que afectara al autoPlay del elemento PlayPause
    componentDidMount(){
        this.setState({
            pause: (!this.state.autoplay)
        })
    } 
    //handleLoadedMetadata es un metodo que carga todos los datos del elemento multimedia.
    handleLoadedMetadata = event => {
        //esta linea carga todos los eventos del elemento video, se encuentra en Video.
        this.video = event.target;
        //Aqui guardamos el dato de la duracion que obtenemos del elemento media, que previamente se inicializo.
        this.setState({
            duration: formattedTime(this.video.duration),
            durationFloat: this.video.duration
        })   
    }
    handleTimeUpdate = event => {
        //Ya no se declara el this.video porque ya lo declaramos en handleLoadedMetadata
        //currentTime propiedad de HMTL5 que te devuelve el meta del tiempo que está transcurriendo
         this.setState({    
            time: formattedTime(this.video.currentTime),
            timeFloat: this.video.currentTime
        })
    }
    handleProgressChange = event =>{
        //event.target.value obtenemos el valor de value en del componente progress bar
        //lo seteamos al currentTime para que cuando cambiemos el valor también cambie el tiempo
        //en el que se esta corriendo el video.
        this.video.currentTime = event.target.value
    }
    handleVolumeChange = event => {
        //Aqui asignamos el valor de el control de volumen a las propiedades del video, para cambiar esos valores y subir o baja el volumen
        this.video.volume = event.target.value;
    }

    handleSeeking = event => {
        this.setState({
            loading: true,
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false,
        })
    }
    handleClickVolume = event => {
       if(this.video.volume !== 0){
          this.video.volume = 0;
        }else{
          this.video.volume = .1;
        }
    }    
    handleFullScreenClick = event => {
        //preguntar si no estoy en full screen
        if (!document.webkitIsFullScreen){
            this.player.webkitRequestFullScreen()      
        }else{
            //salgo full, se aplica al document , no al this del player, Docu link: https://developer.mozilla.org/es/docs/Web/API/Fullscreen_API
            document.webkitExitFullscreen()
    }   
}
//si no estoy entonces mando el full screen de todo el reproductor, para obtenerlo se usa un REF,
//que es una funcion que nosotros creamos, la llamamos setRef para referenciarlo, lo hacemos en el video player layout

//salgo del full screen
    setRef = element => {
//Aquí seteamos en this.player al elemento que proviene del video-player-layout,
//Por qué video player Layout?, pues porque el full screen se va a aplicar en todo el video-player-layout          
//es decir, referenciamos todo el elemento para luego escalarlo, cambiarle propiedades etc.
//es como el get element by ...
        this.player = element
    }

    render(){
        return( 
            <VideoPlayerLayout
            setRef={this.setRef}
            >
                <Title title={this.props.title}/>
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer
                    //se creo el componente Timer, para mostrar el dato de la duracion.
                    duration={this.state.duration}
                    time={this.state.time}
                    />
                    <ProgressBar
                    //Se crearon los Estados Floats para pasar los valores correctamente.
                     duration={this.state.durationFloat}
                     timer={this.state.timeFloat}
                     handleProgressChange={this.handleProgressChange}
                     />
                <Volume 
                handleVolumeChange={this.handleVolumeChange}
                handleClick={this.handleClickVolume}
                />
                <FullScreenPlayer
                handleClick={this.handleFullScreenClick}
                />
                </Controls>
                <Video
                    src={this.props.src}
                    // pause state, este se va a enviar a el componente video
                    pause={this.state.pause}
                    autoplay={this.props.autoplay}
                    //esta es la propiedad que se envía a Video, de aquí obtenemos este dato, 
                    //el this hace referencia a la función de la clase
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}                    
                />
                <Spinner
                active={this.state.loading}
                />    
            </VideoPlayerLayout>    
        )
    }
}

export default VideoPlayer;

