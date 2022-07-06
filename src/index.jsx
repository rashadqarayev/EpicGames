import React from "react";
import ReactDOM from 'react-dom'
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/scss/style.scss';
import "./i18n";
import {UserProvider} from '../src/Context'


ReactDOM.render(<UserProvider>
    <App/>
</UserProvider>,document.querySelector("#root"))