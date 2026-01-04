function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${createTable()}
`;
}

function createTable(){
    let html = "<table>";
    (model.studysessions).forEach(element => {
        html += /*HTML*/ `
        <tr>
        <td>${getClassName(element.classNameId)}</td>
        <td>${getClassType(element.typeId)}</td>
        <td>${element.finished}</td>
        <td>${element.date}</td>
        <td>${element.startTime}</td>
        <td>${element.endTime}</td>
        </tr>
        ` 
    });
    html += "</table>"
    return html
}

function getClassName(id){

    const selectedClass = (model.classes).find(element => element.id == id);
    return selectedClass.className
}

function getClassType(id){

    const selectedClassType = (model.studyType).find(element => element.id == id);
    return selectedClassType.type
}