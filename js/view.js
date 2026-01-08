function updateView(){
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
    <label>Test</label>
    <input>
    <input>
    <input>
    <input>
    <input>
    <input>
    </form>
    `;
    return html
}