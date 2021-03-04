import React, { Component } from 'react'
import '../style.css';

export default class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

   hpzy = ['tell','me','why','?',];

   resArr = this.hpzy.map((el) => <span key={ el }>{el + '_'}</span> );

  printToConsole = () => {console.log('work')};
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div className='main'>
        <h3>Hello HERE : {this.state.date.toLocaleTimeString()}</h3>
        <div className='controls'>
          <button onClick={ this.printToConsole }>ok</button>
         
        </div>
        <div className='list'>{this.resArr}</div>
      </div>
    );
  }
}