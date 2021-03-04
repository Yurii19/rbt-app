import React, {Component} from 'react';
import classes from '../styles/Article.module.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import ArticleDescriptionContainer from "./ArticleDescriptionContainer";

const Articles = (props) => {

  return (
      <div className={classes.maincontent}>
        <h2>Articles</h2>
        <div>
          {props.articlesSet.map((el) =>
              <NavLink to={'article/'+el.id}>
                <ArticleDescriptionContainer key={el.id} data={(
                    {
                      title: el.name.charAt(0).toUpperCase() + el.name.substr(1),
                      description: el.text,
                      id: el.id,
                    }
                )}/>
              </NavLink>
          )}
        </div>

      </div>
  );
}

export default Articles;