class Registration {
    constructor(studentName, registrationNumber, workshop) {
        this.studentName = studentName;
        this.registrationNumber = registrationNumber;
        this.workshop = workshop;
    }

    display() {
        console.log("Student Name:", this.studentName);
        console.log("Registration Number:", this.registrationNumber);
        console.log("Workshop:", this.workshop);
    }
}

module.exports = Registration;