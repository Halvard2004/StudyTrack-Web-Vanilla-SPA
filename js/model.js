model = {
    input: {
      addView: false, 
      addInputs: {    
    id: null,
    classNameId: null,
    typeId: null,
    finished: false,
    date: "",
    startTime: "",
    endTime: ""}},

    classes: [{id: 1, className: "Norsk"}, {id: 2, className: "Matte"}, {id: 3, className: "Programmering"} ],
    studyType: [{id: 1, type: "Lekser"}, {id: 2, type: "Øving"}, {id: 3, type: "Prosjekt"}],
    studysessions:[{
    classNameId: 1,
    typeId: 1,
    finished: true,
    date: "2025-12-31",
    startTime: "12:00",
    endTime: "14:00"
  },
  {
    id: 1,
    classNameId: 2,
    typeId: 1,
    finished: true,
    date: "2026-01-02",
    startTime: "09:00",
    endTime: "10:30"
  },
  {
    id: 2,
    classNameId: 3,
    typeId: 2,
    finished: false,
    date: "2026-01-05",
    startTime: "15:00",
    endTime: "16:00"
  },
  {
    id: 3,
    classNameId: 1,
    typeId: 3,
    finished: false,
    date: "2026-01-10",
    startTime: "11:00",
    endTime: "13:00"
  },
  {
    id: 4,
    classNameId: 1,
    typeId: 2,
    finished: false,
    date: "2026-01-15",
    startTime: "08:30",
    endTime: "09:45"
  }]
}