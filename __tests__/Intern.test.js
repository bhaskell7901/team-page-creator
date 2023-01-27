const Intern = require("../lib/classes/Intern");

describe("class: Intern", () => {
    describe("Intern properties", () => {
        it("Has a 'name' property as a string", () => {
            const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");

            expect(intern.hasOwnProperty("name")).toBeTruthy();
            expect(typeof intern.name).toBe("string");
        });
        it("Has an 'id' property as a number", () => {
            const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");

            expect(intern.hasOwnProperty("id")).toBeTruthy();
            expect(typeof intern.id).toBe("number");
        });
        it("Has an 'email' property as a string", () => {
            const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");

            expect(intern.hasOwnProperty("email")).toBeTruthy();
            expect(typeof intern.email).toBe("string");
        });
        it("Has a 'school' property as a string", () => {
            const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");

            expect(intern.hasOwnProperty("school")).toBeTruthy();
            expect(typeof intern.school).toBe("string");
        });
    });
    describe("Intern Methods", () => {
        describe("getName()", () => {
            it("Should return the 'name' of Intern", () => {
                const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");
                const name = "Brandon";

                expect(intern.getName()).toBe(name);
            });
        });
        describe("getId()", () => {
            it("Should return the 'id' of Intern", () => {
                const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");
                const id = 1001;

                expect(intern.getId()).toBe(id);
            });
        });
        describe("getEmail()", () => {
            it("Should return the 'email' of Intern", () => {
                const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");
                const email = "gmail@gmail.com";

                expect(intern.getEmail()).toBe(email);
            });
        });
        describe("getRole()", () => {
            it("Should return the 'email' of Intern", () => {
                const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");
                const role = "Intern";

                expect(intern.getRole()).toBe(role);
            });
        });
        describe("getSchool()", () => {
            it("Should return the 'school' of Intern", () => {
                const intern = new Intern("Brandon", 1001, "gmail@gmail.com", "University of North Dakota");
                const school = "University of North Dakota";

                expect(intern.getSchool()).toBe(school);
            });
        });
    });
});