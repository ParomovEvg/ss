import { combineReducers } from 'redux';
// import ui from './ui.js';
import phone from './phone.js';
import qr from './qr.js';
import generate from "./generate";


const todoApp = combineReducers({
    phone,
    qr,
    generate,
})

export default todoApp