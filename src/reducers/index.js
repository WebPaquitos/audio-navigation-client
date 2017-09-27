import { combineReducers } from 'redux';
import JarvisReducer from './jarvis';

export default combineReducers({
    jarvis: JarvisReducer,
});
