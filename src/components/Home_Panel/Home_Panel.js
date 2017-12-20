import React from 'react';
import Snippet from '../Snippet/Snippet';
import content from './Content.json';
import style from './Home_Panel.scss';

export default class Home_Panel extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<div id="contentInner" class="noselect">
          {content.map((value,index) => {
            return (<Snippet key={index} title={value.title} content={value.content} />)
          })}
      </div>
    );
  }
}