const Employee = require("../lib/classes/Employee");

describe("class: Employee", () => {
    describe("Employee properties", () => {
        it("Has a 'name' property as a string", () => {
            const employee = new Employee("Brandon", 1001, "gmail@gmail.com");

            expect(employee.hasOwnProperty("name")).toBeTruthy();
            expect(typeof employee.name).toBe("string");
        });
        it("Has an 'id' property as a number", () => {
            const employee = new Employee("Brandon", 1001, "gmail@gmail.com");

            expect(employee.hasOwnProperty("id")).toBeTruthy();
            expect(typeof employee.id).toBe("number");
        });
        it("Has an 'email' property as a string", () => {
            const employee = new Employee("Brandon", 1001, "gmail@gmail.com");

            expect(employee.hasOwnProperty("email")).toBeTruthy();
            expect(typeof employee.email).toBe("string");
        });
    });
    describe("Employee Methods", () => {
        describe("getName()", () => {
            it("Should return the 'name' of Employee", () => {
                const employee = new Employee("Brandon", 1001, "gmail@gmail.com");
                const name = "Brandon";

                expect(employee.getName()).toBe(name);
            });
        });
        describe("getId()", () => {
            it("Should return the 'id' of Employee", () => {
                const employee = new Employee("Brandon", 1001, "gmail@gmail.com");
                const id = 1001;

                expect(employee.getId()).toBe(id);
            });
        });
        describe("getEmail()", () => {
            it("Should return the 'email' of Employee", () => {
                const employee = new Employee("Brandon", 1001, "gmail@gmail.com");
                const email = "gmail@gmail.com";

                expect(employee.getEmail()).toBe(email);
            });
        });
        describe("getRole()", () => {
            it("Should return the 'email' of Employee", () => {
                const employee = new Employee("Brandon", 1001, "gmail@gmail.com");
                const role = "Employee";

                expect(employee.getRole()).toBe(role);
            });
        });
    });
});