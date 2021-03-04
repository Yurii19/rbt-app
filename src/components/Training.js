import React, {Component} from 'react';
import classes from '../styles/Training.module.css';

// const articlesData = [
//   {id: 0, title: 'Вступ', text: 'Всім відомо що рухова активність ...'},
//   {id: 0, title: 'Рух це життя', text: 'З давних давен для виживання ...'}
// ];

// const articlesData = props.data;

const Article = (props) => {
  return (
      <div className={classes.article}>
        <h4>{props.title}</h4>
        <span>{props.text}</span>
        {/*<hr/>*/}
      </div>

  );
};
// let articles = articlesData.map( el => <ArticleDescription title={el.title} text={el.text}/>);

export default class Training extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    const articles = this.props.exirsiseSet.map( el => <Article key={el.title} title={el.title} text={el.text}/>);
    return (
        <div className={classes.maincontent}>
          <h2>Training</h2>
          <div >
            {articles}
          </div>

        </div>
    );
  }
}