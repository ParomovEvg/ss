import { combineReducers } from 'redux';
// import ui from './ui.js';
import phone from './phone.js';
import qr from './qr.js';


const todoApp = combineReducers({
    phone,
    qr
})

export default todoApp