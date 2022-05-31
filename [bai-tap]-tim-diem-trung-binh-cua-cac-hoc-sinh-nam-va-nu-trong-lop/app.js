const students =  [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

const maleStudent = students.filter((student) => {
    return student.gender === "male";
})
const femaleStudent = students.filter((student) => {
    return student.gender === "female";
})

const maleAveScore = maleStudent.reduce((prev, current)=> {
    return prev + (current.poin)/ maleStudent.length
},0);

const femaleAveScore = femaleStudent.reduce((prev, current)=> {
    return prev + (current.poin)/ femaleStudent.length
},0)
console.table(maleStudent);

console.table(femaleStudent);
console.log("Male score average is: ",maleAveScore)
console.log("Female score average is: ",femaleAveScore)
