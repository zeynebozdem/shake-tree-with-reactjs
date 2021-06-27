import React, { Component } from 'react';
import './_leaf.scss';
import Apple from '../apple/Apple';

class Leaf extends Component {
  state = {};
  render() {
    return (
      <div className="leaf" style={{ backgroundColor: this.props.color }}>
        <Apple shakedTree={this.props.shakedTree} moveBasket= {this.props.moveBasket}/>
      </div>
    );
  }
}

export default Leaf;
