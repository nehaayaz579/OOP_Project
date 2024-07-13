import inquirer from "inquirer";
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const proStart = async (persons) => {
    let exit = false;
    do {
        console.log("Welcome Teacher");
        const answer = await inquirer.prompt([{
                type: "list",
                message: "Can we help you?",
                name: "select",
                choices: ["Self", "Student", "exit"]
            }]);
        if (answer.select === "Exit") {
            exit = true;
        }
        if (answer.select === "Self") {
            console.log("Hello i am talking with me.");
            console.log("I am fine Thank uh ,My name is Neha Ayaz.");
        }
        else if (answer.select === "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which student you want to talk?"
            });
            const student = persons.students.find((val => val.name == ans.student));
            if (!student) {
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello i am ${ans.student}`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello i am ${student.name} How are you teacher?`);
                console.log(persons.students);
            }
        }
    } while (!exit);
};
proStart(persons);
