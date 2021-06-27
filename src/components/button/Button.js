import React, { Component } from 'react';
import './_button.scss';

class Button extends Component{

  render() {
    return (
      <div className="button">
        <button onClick={this.props.onClick}>{this.props.title}</button>
      </div>
    );
  }
}

export default Button;
