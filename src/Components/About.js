// About.js

import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>About {this.props.section}</h1>
        <p>This is the {this.props.section} section.</p>
      </div>
    );
  }
}
