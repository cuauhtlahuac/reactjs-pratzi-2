import React, { Component } from "react";
import "./video.css"

class Video extends Component{
    //togglePlay es la funcion que se encarga de manejar cuando el elemento se pone en play o pausa
    //y es heredada del componente video-player
    togglePlay(){
        //si pause state del video-player es true entonces se inicia el video con el metodo play()
        if(this.props.pause){
            this.video.play()
        //si pause state del video-player es false entonces el video se pausa porque se le asigna el metodo pause()
    
        }else{
            this.video.pause()
        }
    }
    //este metodo pertenece al ciclo de vida del componente, recibirá nuevas propiedades, en este caso de el componente video-player.
    componentWillReceiveProps(nextProps){
        if(nextProps.pause !== this.props.pause){
            this.togglePlay();
        }
    }
    //setRef le dice a la clase que el elemento existe, para poder asignarle un metodo en la funcion togglePlay
    setRef = element =>{
        this.video = element;
    }
    render(){
        //en esta const se guarda el valor de handleLoadedMetadata y del handleTimeUpdate en las props
        const {
            handleLoadedMetadata,
            handleTimeUpdate,
            handleSeeking,
            handleSeeked
        } = this.props;
        return(
           <div className="Video"> 
            <video
            src={this.props.src}
            autoPlay={this.props.autoPlay}
            //  ref, sirve para referenciar el elemento dentro de la clase, se coloca para decirle a la clase que
            // es un elemento y poder asignarle metodos
            ref ={this.setRef}
            //esta es la propiedad que esta consumiendo el video, y retorna los valores de ref video.
            onLoadedMetadata={handleLoadedMetadata}
            onTimeUpdate={handleTimeUpdate}
            onSeeking={handleSeeking}
            onSeeked={handleSeeked}
        />
        </div>
        )
    }
}

export default Video