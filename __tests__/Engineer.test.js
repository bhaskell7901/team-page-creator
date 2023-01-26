const Engineer = require("../lib/classes/Engineer");

describe("class: Engineer", () => {
    describe("Engineer properties", () => {
        it("Has a 'name' property as a string", () => {
            const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");

            expect(engineer.hasOwnProperty("name")).toBeTruthy();
            expect(typeof engineer.name).toBe("string");
        });
        it("Has an 'id' property as a number", () => {
            const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");

            expect(engineer.hasOwnProperty("id")).toBeTruthy();
            expect(typeof engineer.id).toBe("number");
        });
        it("Has an 'email' property as a string", () => {
            const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");

            expect(engineer.hasOwnProperty("email")).toBeTruthy();
            expect(typeof engineer.email).toBe("string");
        });
        it("Has a 'gitHubLogin' property as a string", () => {
            const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");

            expect(engineer.hasOwnProperty("gitHubLogin")).toBeTruthy();
            expect(typeof engineer.gitHubLogin).toBe("string");
        });
    });
    describe("Engineer Methods", () => {
        describe("getName()", () => {
            it("Should return the 'name' of Engineer", () => {
                const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");
                const name = "Brandon";

                expect(engineer.getName()).toBe(name);
            });
        });
        describe("getId()", () => {
            it("Should return the 'id' of Engineer", () => {
                const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");
                const id = 1001;

                expect(engineer.getId()).toBe(id);
            });
        });
        describe("getEmail()", () => {
            it("Should return the 'email' of Engineer", () => {
                const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");
                const email = "gmail@gmail.com";

                expect(engineer.getEmail()).toBe(email);
            });
        });
        describe("getRole()", () => {
            it("Should return the 'email' of Engineer", () => {
                const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");
                const role = "Engineer";

                expect(engineer.getRole()).toBe(role);
            });
        });
        describe("getGetHubLogin()", () => {
            it("Should return the 'gitHubLogin' of Engineer", () => {
                const engineer = new Engineer("Brandon", 1001, "gmail@gmail.com", "bhaskell7901");
                const gitHubLogin = "bhaskell7901";

                expect(engineer.getGitHubLogin()).toBe(gitHubLogin);
            });
        });
    });
});