import React, { Component, PropTypes } from 'react';

// Data component
export default class Data extends Component {
  render() {
    return (
      <li>{this.props.data.text}</li>
    )
  }
}

Data.propTypes = {
  data: PropTypes.object.isRequired,
}
