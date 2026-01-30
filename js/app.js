import {updateView} from './view.js';
import {changeBool, addStudySession, fetchInputValues, updateModel}  from './controller.js';
import { getList, getClasses, getStudyTypes } from './api.js';

async function initialize(){
    var List = await getList()
    var Classes =  await getClasses()
    var StudyTypes = await getStudyTypes()
    
    updateModel(List, Classes, StudyTypes);
    updateView();

    
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