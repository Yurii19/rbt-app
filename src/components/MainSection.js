import React, {Component} from 'react';
import classes from '../styles/MainSection.module.css';
import AsideBar from './AsideBar.js';
import Home from "./Home";
import {BrowserRouter, Route} from 'react-router-dom';
import TheArticle from "./TheArticle";
import store from "../redux/redux-store";
import TrainingContainer from "./TrainigContainer";
import Profile from "./Profile";
import ArticlesContainer from "./ArticlesContainer";
import TheArticleContainer from "./TheArticleContainer";


export default class MainSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(store.getState());
    const state = store.getState();
    // let str = store;
    // console.log(state.trainingData.exirsiseSet);

    return (
        <div className={classes.mainSection}>
          <AsideBar curentPage='Home'/>
          <div className={classes.maincontent}>
            {/*<Route path='/home' component={Home}/>*/}
            {/*<Route path='/articles' component={ArticlesDepricated}/>*/}
            <Route exact path='/' render={() => <Home/>}/>
            <Route path='/home' render={() => <Home/>}/>
            <Route path='/articles' render={() => <ArticlesContainer data={state}/>}/>
            <Route path='/training' render={() => <TrainingContainer data={state}/>}/>
            <Route path='/article/:articleID' render={() => <TheArticleContainer data={state}/>}/>
            <Route path='/profile' render={() => <Profile/>}/>
            {/*<Route path={'/article/1'}*/}
            {/*       render={() => <TheArticle data={state.articlesData[0]}/>}/>*/}
          </div>
        </div>
    );
  }
}