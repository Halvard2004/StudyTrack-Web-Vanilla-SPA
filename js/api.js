
export function getList(){
    var ListJson = fetch("https://4fe84534-5f3e-4f4c-8efd-cbf9e9950a9e.mock.pstmn.io/studySessions");
    List = 

    console.log(List);
}

export function getClasses(){
    console.log(fetch("https://4fe84534-5f3e-4f4c-8efd-cbf9e9950a9e.mock.pstmn.io/classes"));
}

export function getStudyTypes(){
    console.log(fetch("https://4fe84534-5f3e-4f4c-8efd-cbf9e9950a9e.mock.pstmn.io/studyType"));
}