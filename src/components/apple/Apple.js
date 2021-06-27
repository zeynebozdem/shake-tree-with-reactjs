import React, { Component } from 'react';
import './_apple.scss';

class Apple extends Component {
  state = {};
  getAppleStatus(shakedTree,moveBasket) {
    if (shakedTree && !moveBasket) {
        return 'apple down';
    }
    if(moveBasket){
      return 'apple down onBasket';
    }
    return 'apple';
}
  render() {
    return (
      <div className={this.getAppleStatus(this.props.shakedTree,this.props.moveBasket)}></div>
    );
  }
}

export default Apple;
