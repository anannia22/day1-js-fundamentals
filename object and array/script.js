// Array of objects for students
let students = [
    { id: 1, name: "Arya", marks: 85 },
    { id: 2, name: "Rahul", marks: 92 },
    { id: 3, name: "Sara", marks: 78 }
];

// Show list in UI
function showStudents() {
    let list = document.getElementById("student-list");
    list.innerHTML = "";

    console.clear();
    students.forEach(student => {
        // Console output
        console.log(`${student.id}. ${student.name} — ${student.marks}`);

        // UI output
        let li = document.createElement("li");
        li.textContent = `${student.id}. ${student.name} — ${student.marks}`;
        list.appendChild(li);
    });
}

showStudents(); // initial render

// Add new student
function addStudent() {
    let name = document.getElementById("name").value.trim();
    let marks = +document.getElementById("marks").value;

    if (name && marks >= 0) {
        students.push({
            id: students.length + 1,
            name: name,
            marks: marks
        });

        showStudents();

        // clear fields
        document.getElementById("name").value = "";
        document.getElementById("marks").value = "";
    } else {
        alert("Enter valid name and marks!");
    }
}


   
