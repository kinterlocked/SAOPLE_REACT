import React from "react";

const students = [
    {
        id : 1,
        name : "연동1"
    },
    {
        id : 2,
        name : "연동2"
    },
    {
        id : 3,
        name : "연동3"
    },
    {
        id : 4,
        name : "연동4"
    },
    {
        id : 5,
        name : "연동5"
    },
];

function AttendanceBook(props){
    return(
        <ul>
            {students.map((students) => {
                return <li key={students.id}>{students.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;