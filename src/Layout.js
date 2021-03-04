import React, {Component} from 'react';
import './style.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import ControlBar from './components/ControlBar';
import ArticlesDepricated from "./components/ArticlesDepricated";
import {BrowserRouter, Route} from 'react-router-dom';
import store from "./redux/redux-store";
import ControlBarContainer from "./components/ControlBarContainer";
// import {changeInput} from "./redux/state";

export default class Layout extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <BrowserRouter>
          <div className='layout'>
            <Header pages={['home', 'articles', 'training', 'profile']}/>
            <ControlBarContainer />
            <MainSection title="Hello"/>
          </div>
        </BrowserRouter>
    );
  }

}