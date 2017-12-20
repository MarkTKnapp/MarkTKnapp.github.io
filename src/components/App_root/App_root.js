import React from 'react';
// import { Router, Route, IndexRoute, hashHistory } from "react-router";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Banner from '../Banner/Banner';
import Home_Panel from '../Home_Panel/Home_Panel';
import style from './App_root.scss';

export default class App_root extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
    	<div>
        <Banner />
  		  <Header />
        <div id="content">
          <Home_Panel/>
          
          </div>
        <Footer />
    	</div>
    );
  }
}