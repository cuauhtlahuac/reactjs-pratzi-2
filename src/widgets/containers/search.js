import React, { Component } from 'react';
import Search from "../components/search";

class SearchContainer extends Component {
    state = {
        value: 'Luis Fonsi',
    }
    handleSubmit = event => {
        //preventDefault es un metodo que previene que se recargue la pagina
        //cuando enviamos el o los datos del formulario
        event.preventDefault();
        console.log(this.input.value, "submit");
    }    
    setInputRef = element => {    
        this.input = element;
    }
    handleInputChange = event => {
        this.setState({
            value: event.target.value.replace(' ','-'),
        })
    }
    render(){
        return(
            <Search
            handleChange = {this.handleInputChange}
            setRef={this.setInputRef}
            handleSubmit={this.handleSubmit}
            value = {this.state.value}
            />
        )
    }
}

export default SearchContainer;