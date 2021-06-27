import React, { Component } from 'react';
import './_floor.scss';
import Button from '../button/Button';

class Floor extends Component {
  render() {
    return (
      <div className="floor">
        <Button onClick={this.props.btnClick} title={this.props.btnText}/>
      </div>
    );
  }
}

export default Floor;
