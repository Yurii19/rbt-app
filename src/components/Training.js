import React, { Component } from 'react';
import classes from '../styles/Training.module.css';
import preloader from "../images/preloader.gif";


const Article = (props) => {
  return (
    <div className={classes.article}>
      <h4>{props.title}</h4>
      <span>{props.text}</span>
    </div>

  );
};




const ExercisePic = (props) => {

  const [pictureUrl, setUrl] = React.useState(preloader);
  const [exSize, setExSize] = React.useState(300);
  React.useEffect(() => {
    setUrl(props.url);
  })

  return (
    <div className={classes.imgBox} style={{ maxWidth: exSize }}>
      <img src={pictureUrl} />
      <button onClick={() => exSize === 300 ? setExSize('100%') : setExSize(300)}>{exSize === 300 ? ' + ' : ' - '}</button>
    </div>)
};


const Training = (props) => {

  const pictures = [
    "https://www.dropbox.com/s/u4n6i7ulvtakhwd/deep-step.gif?dl=1",
    "https://www.dropbox.com/s/m59yc92no55vkow/jumps%20with%20appl%20under%20head.gif?dl=1",
  ];
  const groups = ['Шия', 'Тулуб', 'Плечі', 'Ноги'];
  const articles = props.exirsiseSet.map(el => <Article key={el.title} title={el.title} text={el.text} />);
  const ExercisePictures = pictures.map(el => <ExercisePic key={el} url={el} />);
  const groupsElements = groups.map(el => <span>{el}</span>)
  return (
    <div className={classes.maincontent}>
      <h2>Training</h2>
      <div >
       
        {articles}
       <h4>Choise a group for training</h4>
        <div className = {classes.group}> {groupsElements}</div>
      </div>
      {ExercisePictures}
    </div>
  );
}


export default Training;
