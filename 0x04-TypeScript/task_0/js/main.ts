interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstname: "Alan",
    lastname: "Walker",
    age: 20,
    location: "Nairobi"
};

const student2: Student = {
    firstname: "Anne",
    lastname: "Wanyonyi",
    age: 20,
    location: "New York"
};

const studentsList: Student[] = [student1, student2];

function renderTable() {
    const table = document.createElement("table");
    studentsList.forEach(student => {
        const row = table.insertRow();
        const firstNameCell = row.insertCell();
        firstNameCell.innerHTML = student.firstname;
        const locationCell = row.insertCell();
        locationCell.innerHTML = student.location;
    });
    document.body.appendChild(table);
}

renderTable();