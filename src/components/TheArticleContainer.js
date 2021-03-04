import React, {Component} from 'react';
import TheArticle from "./TheArticle";
import axios from "axios";
import {connect} from "react-redux";
import { setCurrentArticle} from "../redux/articles-reducer";
import { withRouter } from 'react-router-dom';


class TheArticleAPIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesTitleSet: this.props.articlesSet,
    }
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {

    axios.get('https://body-training-1a3ad-default-rtdb.europe-west1.firebasedatabase.app/articles.json')
        .then(response => {
          let target = Object.values(response.data) ;
          let res = target.find(el => el.id === this.props.currentArticleID);
          // console.log(res);
          this.props.setCurrentArticle({currentArticle: res})
        });

  };

  render() {
    // console.log(this.props);
    return (<TheArticle theArticle={this.props.currentArticle}/>);
  }
}

// withRouter(TheArticleAPIComponent);

const mapStateToProps = (state) => {
  return {
    currentArticle: state.articlesData.currentArticle,
    currentArticleID: state.articlesData.currentArticleID,
  };
}

let WithRouterTheArticleContainer = withRouter(TheArticleAPIComponent);
const TheArticleContainer = connect(mapStateToProps, {setCurrentArticle})(WithRouterTheArticleContainer);

export default TheArticleContainer;