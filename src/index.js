import React from 'react';
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import './global.css'

import {ResultContextProvier} from './contexts/ResultContextProvider'

ReactDOM.render(
    <ResultContextProvier>
    <Router>
        <App/>
    </Router>
    </ResultContextProvier>,
    document.getElementById("root"))