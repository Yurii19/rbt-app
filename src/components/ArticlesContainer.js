import React, {Component} from 'react';
import Articles from "./Articles";
import {connect} from "react-redux";
import {getArticlesKit} from "../redux/articles-reducer";
import axios from "axios";
import firebase from "firebase";

class ArticlesAPIComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesTitleSet: this.props.articlesSet,
    }
  }

  componentDidMount() {
    this.getArticles();
    this.getData();
  }

  getData = () => {
    axios.get('https://body-training-1a3ad-default-rtdb.europe-west1.firebasedatabase.app/articles.json')
        .then(response => {
          // let temp = Object.keys(response.data);
          // console.log(temp);
          //  console.log(response.data);

        });
  };
  getArticles = () => {
    const name = firebase.database().ref('articles');
    name.on('value', (el) => {
      const data = el.val();
      this.props.getArticlesKit({value: data});
    });
  }

  render() {
    return (<Articles articlesSet={this.props.articlesSet}/>);
  }
}

const mapStateToProps = (state) => {
  return {
    articlesSet: state.articlesData.articlesSet,
  };
}

const ArticlesContainer = connect(mapStateToProps, {getArticlesKit})(ArticlesAPIComponent);

export default ArticlesContainer;