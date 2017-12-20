import React from 'react';
import style from './Snippet.scss';

export default class Snippet extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
    	<div class="snippet noselect">
        <p class="snippetTitle"> {this.props.title} </p> <br />
        <p class="snippetContent"> {this.props.content} </p> <br />
      </div>
    );
  }
}