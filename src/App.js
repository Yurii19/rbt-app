import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyPage from './components/MyPage';
import Layout from './Layout';
import state from "./redux/state";

// addExirsise({title: 'Нова вправа',text: 'Згинання розгинання рук в упорі'});

function App(props) {
   // console.log('app -> ' + state);
  return (
      <div className="App">
        <Layout store={props.store}/>
      </div>
  );
};

export default App;
