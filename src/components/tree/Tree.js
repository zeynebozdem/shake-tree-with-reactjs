import React, { Component } from 'react';
import './_tree.scss';
import Apple from '../apple/Apple';
import Wood from '../wood/Wood';
import Leaf from '../leaf/Leaf';

class Tree extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.shakeState ? 'tree shakeTree' : 'tree'}>
        <div className="leafs">
          <Leaf shakedTree = {this.props.shakedTree} moveBasket= {this.props.moveBasket} color="var(--color-green-100)" />
          <Leaf shakedTree = {this.props.shakedTree} moveBasket= {this.props.moveBasket} color="var(--color-green-200)" />
          <Leaf shakedTree = {this.props.shakedTree} moveBasket= {this.props.moveBasket} color="var(--color-green-300)" />
        </div>
        <Wood />
      </div>
    );
  }
}

export default Tree;
