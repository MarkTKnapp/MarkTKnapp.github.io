import React from 'react';
import style from './Header.scss';
import headerLock from './headerLock.js';

const links = ["Home", "About", "Projects"];

export default class Header extends React.Component {
  constructor() {
    super();
    // this.setState({activeLink: "Home"});
  }

  render() {
    return (
    	<div id="header" class="noselect">
    		<ul>
          {links.map((value,index) => {
            return (<li key={value}><a href="#">{value}</a></li>)
          })}
        </ul>
    	</div>
    );
  }
}