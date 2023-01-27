const Manager = require("../lib/classes/Manager");

describe("class: Manager", () => {
    describe("Manager properties", () => {
        it("Has a 'name' property as a string", () => {
            const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");

            expect(manager.hasOwnProperty("name")).toBeTruthy();
            expect(typeof manager.name).toBe("string");
        });
        it("Has an 'id' property as a number", () => {
            const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");

            expect(manager.hasOwnProperty("id")).toBeTruthy();
            expect(typeof manager.id).toBe("number");
        });
        it("Has an 'email' property as a string", () => {
            const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");

            expect(manager.hasOwnProperty("email")).toBeTruthy();
            expect(typeof manager.email).toBe("string");
        });
        it("Has an 'officeNumber' property as a string", () => {
            const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");

            expect(manager.hasOwnProperty("officeNumber")).toBeTruthy();
            expect(typeof manager.email).toBe("string");
        });
    });
    describe("Manager Methods", () => {
        describe("getName()", () => {
            it("Should return the 'name' of Manager", () => {
                const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");
                const name = "Brandon";

                expect(manager.getName()).toBe(name);
            });
        });
        describe("getId()", () => {
            it("Should return the 'id' of Manager", () => {
                const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");
                const id = 1001;

                expect(manager.getId()).toBe(id);
            });
        });
        describe("getEmail()", () => {
            it("Should return the 'email' of Manager", () => {
                const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");
                const email = "gmail@gmail.com";

                expect(manager.getEmail()).toBe(email);
            });
        });
        describe("getRole()", () => {
            it("Should return the 'email' of Manager", () => {
                const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");
                const role = "Manager";

                expect(manager.getRole()).toBe(role);
            });
        });
        describe("getOfficeNum()", () => {
            it("Should return the 'officeNumber' of Manager", () => {
                const manager = new Manager("Brandon", 1001, "gmail@gmail.com", "20F");
                const officeNumber = "20F";

                expect(manager.getOfficeNumber()).toBe(officeNumber);
            });
        });
    });
});