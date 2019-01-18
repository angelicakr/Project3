import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";
import Navbar from "./Components/Navbar";

import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';


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
            <Route exact path="/Login.js" component={Login} />
            <Route exact path="/Signup.js" component={Signup} />
            <Route exact path="/Profile.js" component={Profile} />
        </div>
    </Router>
    , document.getElementById('root')



);
registerServiceWorker();
