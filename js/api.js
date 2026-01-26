
export async function getList(){
    var ListJson = await fetch("https://4fe84534-5f3e-4f4c-8efd-cbf9e9950a9e.mock.pstmn.io/studySessions");
    var data = await ListJson.json();
    return data;
}

export async function getClasses(){
    var ListJson = await fetch("https://4fe84534-5f3e-4f4c-8efd-cbf9e9950a9e.mock.pstmn.io/classes");
    var data = await ListJson.json();
    return data;
}

export async function getStudyTypes(){
    var ListJson = await fetch("https://4fe84534-5f3e-4f4c-8efd-cbf9e9950a9e.mock.pstmn.io/studyType");
    var data = await ListJson.json();
    return data;
}