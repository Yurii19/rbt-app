export const ADD_EXIRCISE = 'ADD_EXIRCISE';
export const CHANGE_INPUT = 'CHANGE_INPUT';

let initState = {

  exirsiseSet: [
    {id: 0, title: 'Присідання', text: '1 - присід, руки перед собою, 2 - вихідне положення ...'}
  ],
  newExirciseText: 'flipY',
};


const trainingReducer = (state = initState, action) => { //state === trainingData
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        newExirciseText: action.value,
      };
    case ADD_EXIRCISE:
      // let stateCopy1 = {...state};
      let newLine = {id: 0, title: action.title, text: state.newExirciseText};
      return {
        exirsiseSet : [...state.exirsiseSet, newLine],
        newExirciseText: '',
      }
    default:
      return state;
      break;
  }

  //return state;

}
export const addNewExirciseCreator = (param) => ({type: ADD_EXIRCISE, title: param.title});

export const inputHendlerCreator = (param) => ({type: CHANGE_INPUT, value: param.value,});


export default trainingReducer;