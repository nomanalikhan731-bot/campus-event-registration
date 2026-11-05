const Registration = require("./Registration");

class RegistrationService {
    constructor() {
        this.registrations = [];
    }

    addRegistration(name, regNo, workshop) {

        // Validate empty fields
        if (!name.trim() || !regNo.trim() || !workshop.trim()) {
            return "Error: All fields are required!";
        }

        // Check duplicate registration number
        const duplicate = this.registrations.find(
            student => student.registrationNumber === regNo
        );

        if (duplicate) {
            return "Error: Registration number already exists!";
        }

        // Create and store student
        const student = new Registration(name, regNo, workshop);
        this.registrations.push(student);

        return "Registration successful!";
    }

    listRegistrations() {
        if (this.registrations.length === 0) {
            console.log("No registrations found.");
            return;
        }

        this.registrations.forEach(student => {
            console.log("-------------------------");
            student.display();
        });
    }

    findRegistration(regNo) {
    if (!regNo || !regNo.trim()) {
        return null;
    }

    return this.registrations.find(
        student =>
            student.registrationNumber.toLowerCase() ===
            regNo.trim().toLowerCase()
    ) || null;
}
}

module.exports = RegistrationService;