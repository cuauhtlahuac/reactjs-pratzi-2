import React from 'react';
import ReactDOM from 'react-dom';
import Home from "../entries/pages/containers/home"
import data from '../api.json';

const homeContainer = document.getElementById('home-container');

ReactDOM.render(<Home data={data}/>, homeContainer);
