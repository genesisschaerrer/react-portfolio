import React, { Component } from 'react';
import moment from 'moment'


import PorfolioContainer from "./portfolio/portfolio-container"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Genesis Schaerrer Portfolio</h1>
        <div>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div>
        <PorfolioContainer />
      </div>
    );
  }
}
