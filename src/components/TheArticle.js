import React, {Component} from 'react';
import classes from '../styles/TheArticle.module.css';


const TheArticle = (props) => {

  return (
      <div className={classes.article}>
        <h3>{props.theArticle
            ? props.theArticle.name.charAt(0).toUpperCase()+ props.theArticle.name.substr(1)
            : ''}</h3>
        <span>{props.theArticle ? props.theArticle.text : <img src="/preloader.gif" alt=""/>}</span>
        {/*<hr/>*/}
        {/*The Article*/}
      </div>

  );
};

export default TheArticle;