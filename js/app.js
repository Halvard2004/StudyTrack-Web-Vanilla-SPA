import {updateView} from './view.js';
import {changeBool, addStudySession, fetchInputValues}  from './controller.js';
import { getList, getClasses, getStudyTypes } from './api.js';

function initialize(){
    updateView();
    console.log(getList());
    console.log(getClasses());
    console.log(getStudyTypes());
}

function AddButton(){
    changeBool("addView");
    setTimeout(1000);
    updateView();
}

function SubmitButton(){
    fetchInputValues();
    addStudySession();
    updateView();
}

window.initialize = initialize;
window.AddButton = AddButton;
window.SubmitButton = SubmitButton;