import React, {Component} from 'react';
import classes from '../styles/InnerControl.module.css';
import {addNewExirciseCreator, inputHendlerCreator} from "../redux/training-reducer";

const ControlBar = (props) => {
  // let exircise = React.createRef();

  const addNewExircise = () => {
    props.addExircise({title: 'New exircise'});
  };

  const inputHandler = (e) => {
    //console.log(e.target.value+'--'+props.newExirciseText);
     props.onChangeInput( { value: e.target.value });

  }

  return (
      <div className={classes.body}>
        <div className={classes.wrapper}>

          <span>Input exircise : </span>
          <textarea name="" id="" cols="30" rows="4"
                    onChange={inputHandler}
                    value={props.newExirciseText}
          />
          <button onClick={addNewExircise}>add</button>

        </div>
      </div>
  );
  // }

}
export default ControlBar;