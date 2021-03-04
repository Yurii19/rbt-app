
const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userID: null,
    email: null,
    login: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
               ...action.data,
            }
        default:
            return state;
            break;
    }
}

export const setUserData = (userID, email, login) => ({type: SET_USER_DATA, data: {userID, email, login}});

export default authReducer;