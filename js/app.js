import {updateView} from './view.js';
import {changeBool, addStudySession, fetchInputValues}  from './controller.js';


async function initialize(){
    updateView();
}

function AddButton(){
    changeBool("addView");
    setTimeout(1000);
    updateView();
}

async function SubmitButton(){
    fetchInputValues();
    addStudySession();
    updateView();
}

window.initialize = initialize;
window.AddButton = AddButton;
window.SubmitButton = SubmitButton;