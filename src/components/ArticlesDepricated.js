import React, {Component} from 'react';
import classes from '../styles/Article.module.css';
import ArticleDescription from "./ArticleDescription";
import axios from 'axios';
import firebase from "firebase";


let ArticlesDepricated = (props) => {
  const db = firebase.database();
  console.log(db);
  const name = db.ref('articles');
  name.on('value', (el) => {
   console.log(el.val());
  });
  // console.log('sdf');
  // const articles = props.data.map( el => <ArticleDescription data={el} />);


  // axios.get('https://body-training-1a3ad-default-rtdb.europe-west1.firebasedatabase.app/').
  //     then(response => console.log(response));
  return(
      <div className={classes.maincontent}>
        <h2>Articles</h2>
        <button>Get articles</button>
        <div >
          {/*{articles}*/}
        </div>

      </div>
  )
}

export default ArticlesDepricated;

// export default class ArticlesDepricated extends Component {
//   constructor(props) {
//     super(props);
//   }
//
//   render() {
//     const articles = this.props.data.map( el => <ArticleDescription data={el} />);
//     return (
//         <div className={classes.maincontent}>
//           <h2>ArticlesDepricated</h2>
//           <div >
//             {articles}
//           </div>
//
//         </div>
//     );
//   }
// }