import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import registerServiceWorker from "./registerServiceWorker";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";


import Login from './Components/Login';
//import Profile from './Components/Profile';
import Signup from './Components/Signup';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main/Main"


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
    // then we will attach it to the headers of each request from react application via axios
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
  }
  

ReactDOM.render(
<Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/Main" component={Main} />
        </div>
    </Router>
    , document.getElementById('root')


);
registerServiceWorker();
