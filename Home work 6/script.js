let students = [
    { id: 1, name: 'Alex', marks: [10, 10, 10] }, // 29 / 3 = 9.67
    { id: 2, name: 'Bob', marks: [10, 9, 10] },
    { id: 3, name: 'John', marks: [8, 6, 7, 8, 9, 9, 10] },
];

function getStudentAverageMark({ marks }) {
    return getAverage(marks);
}

function getGroupAverageMark(students) {
  

    const allMarks = students.flatMap(({ marks }) => marks);

    return getAverage(allMarks);
}

function getAverage(arr) {
  
    const sum = arr.reduce((acc, mark) => acc + mark);
    return sum / arr.length;
}