let students = [];

function addStudent() {

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let marks = Number(document.getElementById("marks").value);

    let grade;

    if (marks >= 90)
        grade = "A";
    else if (marks >= 80)
        grade = "B";
    else if (marks >= 70)
        grade = "C";
    else if (marks >= 60)
        grade = "D";
    else
        grade = "F";

    students.push({
        id,
        name,
        marks,
        grade
    });

    displayStudents();
}

function displayStudents() {

    let tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    students.forEach(student => {

        tableBody.innerHTML += `
        <tr>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.marks}</td>
            <td>${student.grade}</td>
        </tr>
        `;
    });
}