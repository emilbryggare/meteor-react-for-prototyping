import React, { Component } from 'react';

import Data from './Data.jsx';

// App component - represents the whole app
export default class App extends Component {
  getData() {
    return [
      { _id: 1, text: 'This is data 1' },
      { _id: 2, text: 'This is data 2' },
      { _id: 3, text: 'This is data 3' },
    ];
  }

  renderData() {
    return this.getData().map((data) => (
      <Data key={data._id} data={data} />
    ));
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>App Container</h1>
        </header>

        <ul>
          {this.renderData()}
        </ul>
      </div>
    );
  }
}
