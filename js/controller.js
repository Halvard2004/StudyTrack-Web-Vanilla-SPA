async function changeBool(models){
    switch (models){
        case "addView":
            model.input.addView = !model.input.addView
            break;
        case "addInput":
            model.input.addInputs.finsihed = !model.input.addInputs.finsihed
            break;
    }
    updateView()
}


function getClassName(id){

    const selectedClass = (model.classes).find(element => element.id == id);
    return selectedClass.className
}

function getClassType(id){

    const selectedClassType = (model.studyType).find(element => element.id == id);
    return selectedClassType.type
}

function addStudySession(){
    const newId = model.studysessions.length > 0 ? model.studysessions[model.studysessions.length -1].id + 1 : 0;
    const newStudySession = {
        id: newId,
        classNameId: parseInt(model.input.addInputs.classNameId),
        typeId: parseInt(model.input.addInputs.typeId),
        finished: model.input.addInputs.finished === 'true',
        date: model.input.addInputs.date,
        startTime: model.input.addInputs.startTime,
        endTime: model.input.addInputs.endTime
    }; 
    model.studysessions.push(newStudySession);
    model.input.addInputs = {    
        id: null,
        classNameId: null,
        typeId: null,
        finished: false,
        date: "",
        startTime: "",
        endTime: ""};
    model.input.addView = false;
    updateView();
}