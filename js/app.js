import { updateView } from "./view.js";

var view = await loadMopdule("./view.js");
var controller = await loadMopdule("./controller.js"); 
var model = await loadMopdule("./model.js");
var common = await loadMopdule("./common.js"); 

async function initialize(){
    await getmopdules();
    view.updateView();
}

async function loadMopdule(moduleName){
    try {
       var module = await import(moduleName); 
       return module;
    } catch (error) {
        console.error(`Error loading module ${moduleName}:`, error);
    }   
    

}