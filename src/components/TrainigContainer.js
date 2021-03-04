import React, {Component} from 'react';
import {addNewExirciseCreator, inputHendlerCreator} from "../redux/training-reducer";
// import ControlBar from "./ControlBar";
import {connect} from 'react-redux';
import Training from "./Training";



// }
const mapStateToProps = (state) => {
  // console.log(state.trainingData.exirsiseSet);
  return {
    exirsiseSet: state.trainingData.exirsiseSet,
  };
}
const mapDispatchToProps = (dispatch) => {
  {}
  //
  // return {
  //   onChangeInput: (param) => {
  //     dispatch(inputHendlerCreator(param));
  //   },
  //   addExircise: (param) => {
  //     dispatch(addNewExirciseCreator(param));
  //   },
  // };
}
const TrainingContainer = connect(mapStateToProps)(Training);

export default TrainingContainer;