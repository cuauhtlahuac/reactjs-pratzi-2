//se cambió a pureComponent (Componeente puro)
import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent{
    handleClick = (event) => {
        //Al ejecutar la funcion handleClick le pasamos como parametro this.props
        //que es lo mismo que pasarle los datos de title, author, src etc..
        this.props.openModal(this.props)
    }
    render(){
       return (           
            <div className="Media">
                <div className='Media-cover' onClick={this.handleClick}>
                    <img src={this.props.cover} alt='bit' width={260} height={160}/>
                    <h1 className='Media-title'>{this.props.title}</h1>  
                    <p className='Media-author'>{this.props.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string.isRequired,
    media: PropTypes.oneOf(['video','audio'])
}

export default Media;