
let students = [
    { id: 1, name: "Arya", marks: 85 },
    { id: 2, name: "Rahul", marks: 92 },
    { id: 3, name: "Sara", marks: 78 }
];


function showStudents() {
    let list = document.getElementById("student-list");
    list.innerHTML = "";

    console.clear();
    students.forEach(student => {
        
        console.log(`${student.id}. ${student.name} — ${student.marks}`);

      
        let li = document.createElement("li");
        li.textContent = `${student.id}. ${student.name} — ${student.marks}`;
        list.appendChild(li);
    });
}

showStudents(); 


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

       
        document.getElementById("name").value = "";
        document.getElementById("marks").value = "";
    } else {
        alert("Enter valid name and marks!");
    }
}


   
