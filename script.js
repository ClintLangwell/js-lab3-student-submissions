"use strict";

const submissions = [{
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,

},
{
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,

},
{
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,

},
{
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,

},
];

// 1 add
const addSubmission = (array, newName, newScore, newDate) => {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60 ? true : false,
    };
    array.push(newSubmission);
};


// addSubmission(submissions, "Clint", 100, "2020-10-21");
// console.log(submissions);

// 2 delete by index
const deleteSubmissionByIndex = (array, index) => {
     array.splice(index, 1);
};

// deleteSubmissionByIndex(submissions, 4);
// console.log(submissions);

// 3 delete by name
const deleteSubmissionByName = (array, name) => {
    let index = array.findIndex((student)=>{
        return student.name === name;
    });
    
    array.splice(index, 1);
    
};

// deleteSubmissionByName(submissions, "Joe");
// console.log(submissions);

// 4 edit submission
const editSubmission = (array, index, score) => {
    let student = array.find((student)=>{
        return student === array[index];
    });
    student.score = score;
    student.passed = score >= 60; 
    
};

// editSubmission(submissions, 0, 45);
// console.log(submissions);

// 5 find submission name
const findSubmissionByName = (array, name)=>{
    return array.find((student)=>{
        return student.name === name;
    });
};

//console.log(findSubmissionByName(submissions, "Jill"));

// 6 find lowest score
// const findLowestScore = (array) => {
//     let newScore = null;
//     return array.forEach((student)=>{
        
        
//         if(newScore < student.score){
//             newScore = student.score;
            
            
//         }
        
//     });
// };
// console.log();


// 7 find lowest score
const findLowestScore = (array) =>{
    let currentLowestObject = array[0];
    array.forEach((object)=>{
        if(object.score < currentLowestObject.score){
            currentLowestObject = object;
        }

    });
    return currentLowestObject;
};

//console.log(findLowestScore(submissions));

// 8 find average score
const findAverageScore = (array) =>{
    let sum = 0;
    for (const person of array){
        sum += person.score;
    };  
    return sum / array.length;
};

//console.log(findAverageScore(submissions));

// 9 filter passing
 const filterPassing = (array) => {
    
    let passing = array.filter((student)=>{
        return student.passed === true;
    });
    return passing;
 };
 //console.log(filterPassing(submissions));

 // 10 filter 90 and above
 const filter90AndAbove = (array) => {
    let newArray = array.filter((student)=>{
        return student.score >= 90;
    });
    return newArray;
 };

 //console.log(filter90AndAbove(submissions));

 