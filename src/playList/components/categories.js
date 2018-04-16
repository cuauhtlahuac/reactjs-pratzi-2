import React from 'react';
import Playlist from './playList';

function Categories(props){
    const playlists = props.data.categories
    return(
        <div>
            <h1>Playlists</h1>
        {
            playlists.map((playlist,indice)=>{ 
            return <Playlist playlist={playlist.playlist} key={indice + 'playlist'}/>
            })
        }
        </div>
    )
}
export default Categories;