import React ,{Component} from 'react';
import './_forest.scss';
import Floor from '../floor/Floor';
import Garden from '../garden/Garden';
import Sky from '../sky/Sky';

class Forest extends Component {
  constructor(props){
    super(props);
    this.state = {
      btnText: 'SHAKE',
      shakeState: false,
      shakedTree: false,
      moveBasket: false
    };
  }
  shakeTree() {
    if (this.state.btnText == "SHAKE") {
      this.setState({
        shakeState: true
      });
      setTimeout(() => {
        this.setState({
          btnText : 'REFRESH',
          shakedTree: true,
          moveBasket:false
        });
      }, 1050);
      setTimeout(() => {
        this.setState({
          shakedTree: true,
          moveBasket:true
        })
      }, 3000);
    }else{
      window.location.reload();
    }
    
  }

  render() {
    return (
      <div className="forest">
        <Sky/>
        <Garden shakeState={this.state.shakeState} shakedTree= {this.state.shakedTree} moveBasket={this.state.moveBasket}/>
        <Floor btnClick={this.shakeTree.bind(this)} btnText = {this.state.btnText}/>
      </div>
    );
  }
}

export default Forest;
