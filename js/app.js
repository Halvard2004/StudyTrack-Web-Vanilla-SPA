import {updateView} from './view.js';
import {changeBool, addStudySession, fetchInputValues, updateModel}  from './controller.js';
import { getList, getClasses, getStudyTypes } from './api.js';

function initialize(){
    var List = getList()
    var Classes =  getClasses()
    var StudyTypes = getStudyTypes()
    
    setTimeout(() => {
    updateModel(List, Classes, StudyTypes);
    updateView();
}, 2000);

    
    
}

function AddButton(){
    changeBool("addView");
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