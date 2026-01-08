function changeBool(models){
    switch (models){
        case "addView":
            model.input.addView = !model.input.addView
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