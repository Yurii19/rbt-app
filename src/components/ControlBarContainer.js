import React, {Component} from 'react';
import {addNewExirciseCreator, inputHendlerCreator} from "../redux/training-reducer";
import ControlBar from "./ControlBar";
import {connect} from 'react-redux';

// const ControlBarContainer = (props) => {
//   let exirsise = React.createRef();
//   const state = props.store.getState();
//
//   const addExircise = (newTitle) => {
//     props.store.dispatch(addNewExirciseCreator({title: newTitle}));
//   };
//   const onChangeInput = (newValue) => {
//     props.store.dispatch(inputHendlerCreator({value: newValue}));
//
//   }

// return (
//     <div>
//       <ControlBar newExirciseText={state.trainingData.newExirciseText}
//                   onChangeInput={onChangeInput}
//                   addExircise={addExircise}
//       />
//     </div>
// );

// }
const mapStateToProps = (state) => {
  // console.log(state.trainingData.newExirciseText);
  return {
    newExirciseText: state.trainingData.newExirciseText,
  };
}
const mapDispatchToProps = (dispatch) => {

  return {
    onChangeInput: (param) => {
      dispatch(inputHendlerCreator(param));
    },
    addExircise: (param) => {
      dispatch(addNewExirciseCreator(param));
    },
  };
}
const ControlBarContainer = connect(mapStateToProps, mapDispatchToProps)(ControlBar);

export default ControlBarContainer;