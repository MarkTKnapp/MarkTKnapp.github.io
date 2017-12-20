import React from 'react';
import style from './Banner.css';
import parallax from './parallax.js';

export default class Banner extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<div id="banner">
        <p>Mark Knapp</p>
        <div id="innerdiv" class="noselect">
    		  <img id="bimg" src={require("../../resources/banner2.jpeg")} />
        </div>
    	</div>
    );
  }
}