export function updateView(){
    document.getElementById("app").innerHTML = /*HTML*/ `
    ${!model.input.addView ? createTable() : ""}
    ${model.input.addView ? createAdd() : ""}
    <button onclick="changeBool('addView')">${!model.input.addView ? "Add" : "Cancel"}</button>
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


function createAdd() {
    let html = /*HTML*/ `
    <form>
    <div>
    <label> Class Name: </label>
    <select id="className" onchange="model.input.addInputs.classNameId = this.value">
        ${getOptionsClassNames()}
    </select
    </div>
    <div>
    <label> Study Type: </label>
    <select id="studyType" onchange="model.input.addInputs.typeId = this.value">
        ${getOptionsStudyTypes()}
    </select
    </div>
    <div>
    <label>is Done: </label>
    <select id="finsihed" onchange="model.input.addInputs.finished = this.value">
        <otion selected disabled>Select Status</option>
        <option value="true">True</option>
        <option value="false">False</option>
    </select
    </div>
    <div>
    <label>Date</label>
    <input type="date" onchange="model.input.addInputs.date = this.value">
    </div>
    <div>
    <label>Start Time</label>
    <input type="time" onchange="model.input.addInputs.startTime = this.value">
    </div>
    <div>
    <label>End Time</label>
    <input type="time" onchange="model.input.addInputs.endTime = this.value">
    </div>
    <br>
    <button type="button" onclick="addStudySession()">Add Study Session</button>
    </form>
    `;
    return html
}


function getOptionsClassNames(){
    let html = "<option selected disabled> Select a Class </option>";
    (model.classes).forEach(element => {
        html += "<option value='" + element.id + "'>" + element.className + "</option>"
    });
    return html
}

function getOptionsStudyTypes(){
    let html = "<option selected disabled> Select a Study Type </option>";
    (model.studyType).forEach(element => {
        html += "<option value='" + element.id + "'>" + element.type + "</option>"
    });
    return html
}