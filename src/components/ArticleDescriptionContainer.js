import React, {Component} from 'react';
import classes from '../styles/Training.module.css';
import ArticleDescription from "./ArticleDescription";
import {connect} from "react-redux";
import {setCurrentArticleID} from "../redux/articles-reducer";

// const mapStateToProps = (state) => {
//   return {
//     articlesSet: state.articlesData.articlesSet,
//   };
// }
const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentArticleID: (id) => {
      return dispatch(setCurrentArticleID({articleID: id}));
    },
  }
}

const ArticleDescriptionContainer =
    connect(null, mapDispatchToProps)(ArticleDescription);

export default ArticleDescriptionContainer;