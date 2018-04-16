//se cambió a pureComponent (Componeente puro)
import React, { PureComponent } from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends PureComponent{
    render(){
       return (           
            <div className="Media">
                <div className='Media-cover' onClick={this.props.handleClick}>
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