import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';
import uiReducer from './ui-reducer';

const rootReducer = combineReducers({
    ui: uiReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    form: formReducer,
});

export default rootReducer;