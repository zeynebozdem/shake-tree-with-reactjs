import React, { Component } from 'react';
import './_garden.scss';
import Tree from '../tree/Tree';
import Basket from '../basket/Basket';

class Garden extends Component {
  render() {
    return (
      <div className="garden">
        <Tree shakeState={this.props.shakeState} moveBasket={this.props.moveBasket} shakedTree={this.props.shakedTree}/>
        <Basket />
      </div>
    );
  }
}

export default Garden;
