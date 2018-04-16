//Se cambio a Componente funcional
import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props){
        const playlist = props.data.categories[0].playlist
        const categories = props.data.categories
        return(
            <div>
            {    
            categories.map((category)=>{
                return(    
                <div  className="Playlist">
                {
                    category.playlist.map((item)=>{
                        return <Media {...item} key={item.id}/>
                    })
                }
                </div>)
            })
            } 
            </div>           
        )       
    }

export default Playlist;