import React, {Component} from 'react';
import classes from '../styles/ArticleDescription.module.css';

const ArticleDescription = (props) => {
    // console.log(props.data);
  const clickHandle = ()=> {
    props.setCurrentArticleID(props.data.id);
  }
  return (
      <div className={classes.article} onClick={clickHandle}>
        <h4>{props.data.title}</h4>
        <span>{props.data.description.substr(0, 100) + ' ...'}</span>
        {/*<hr/>*/}
      </div>
  );
};

export default ArticleDescription;