import {CHANGE_INPUT} from "./training-reducer";

const GET_ARTICLES_KIT = 'GET_ARTICLES_KIT';
const SET_THE_ARTICLE = 'SET_THE_ARTICLE';
const SET_CURRENT_ARTICLE = 'SET_CURRENT_ARTICLE';

let initialState = {
  articlesSet: [],
  currentArticleID: null,
  currentArticle: null,
};

const articlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_KIT:
      const inputedData = action.value;
      let temp = [];
      for (const key in inputedData) {
        temp.push(inputedData[key]);
      }
      temp.sort((a, b) => a.id - b.id );
      return {
        articlesSet: temp,
      };
    case SET_THE_ARTICLE :
      return {...state, currentArticleID: action.articleID};
    case SET_CURRENT_ARTICLE:
      // console.log(action.currentArticle);
      return {...state, currentArticle: action.currentArticle};
    default:
      return state;
      break;
  }
}

export const getArticlesKit = (param) => ({type: GET_ARTICLES_KIT, value: param.value,});
export const setCurrentArticleID = (param) => ({type: SET_THE_ARTICLE, articleID: param.articleID,});
export const setCurrentArticle = (param) => ({type: SET_CURRENT_ARTICLE, currentArticle: param.currentArticle});

export default articlesReducer;