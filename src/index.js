import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from 'react-redux';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCmgKn699ZS0hkndKGqnGTo1BXaHiB5IiM",
  authDomain: "body-training-1a3ad.firebaseapp.com",
  databaseURL: "https://body-training-1a3ad-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "body-training-1a3ad",
  storageBucket: "body-training-1a3ad.appspot.com",
  messagingSenderId: "335835540754",
  appId: "1:335835540754:web:f91f96d38359a2f4ad57cb"
};
firebase.initializeApp(firebaseConfig);



   ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );




// store.subscribe(() => {
//   let state = store.getState();
//   rerenderUI(state);
// });


reportWebVitals();
