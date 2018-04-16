import React from 'react';
import "./search.css";

//esta es la forma de declarar la function pero con arrow function y sin return porque usamos () en lugar de {}
const Search = (props) => (
    <form 
    className="Search"
    onSubmit={props.handleSubmit}
    >
        <input
        ref={props.setRef}
        type="text"
        placeholder="busca tu video favorito"
        className="Search-input"
        name="Search"
        onChange={props.handleChange}
        value={props.value}
        />
    </form>
)

export default Search 