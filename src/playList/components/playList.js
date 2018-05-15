//Se cambio a Componente funcional
import React from 'react';
import Media from './media.js';
import './playlist.css';

function Playlist(props){

    return(
                <div className="Playlist">
                    {
                        props.playlist.map((item)=>{
                                //handleClick =..., se sustituye por openModal, que se va a ejecutar en media cuando demos click y 
                                //le va a pasar los parametros al ejecutar la funcion handleClick de <Media/>
                                //...item, devuelve como resultado los valores obtenido de mapear la playList props.
                        return <Media openModal = {props.handleOpenModal} {...item} key={item.id}/>
                        })
                    }
                </div>
            )       
    }

export default Playlist;