import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from './Navbar';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from "./footer";
import Shortenurls from "./shorten-urls";
import Listurls from "./list-urls";
import Notfound from "./notfound";


const routing = (
  <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/shorten-url" component={Shortenurls} />
        <Route path="/list-url" component={Listurls} />
        <Route component={Notfound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
