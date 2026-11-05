const readline = require("readline");
const RegistrationService = require("./RegistrationService");

class ConsoleUI {
    constructor() {
        this.service = new RegistrationService();

        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    ask(question) {
        return new Promise(resolve => {
            this.rl.question(question, resolve);
        });
    }

    async run() {
        let choice;

        do {
            console.log("\n===== CAMPUS EVENT REGISTRATION =====");
            console.log("1. Register Student");
            console.log("2. Display All Registrations");
            console.log("3. Search Registration");
            console.log("4. Exit");

            choice = await this.ask("Enter choice: ");

            if (choice === "1") {
                const name = await this.ask("Student Name: ");
                const regNo = await this.ask("Registration Number: ");
                const workshop = await this.ask("Workshop: ");

                console.log(
                    this.service.addRegistration(name, regNo, workshop)
                );
            }
            else if (choice === "2") {
                this.service.listRegistrations();
            }
            else if (choice === "3") {
                const regNo = await this.ask(
                    "Enter registration number to search: "
                );

                const result = this.service.findRegistration(regNo);

                if (result) {
                    console.log("\nRegistration Found:");
                    result.display();
                } else {
                    console.log("Registration not found!");
                }
            }
            else if (choice !== "4") {
                console.log("Invalid choice!");
            }

        } while (choice !== "4");

        console.log("Thank you!");
        this.rl.close();
    }
}

module.exports = ConsoleUI;