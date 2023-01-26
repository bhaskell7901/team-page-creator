class Employee {
    #name: String = "";
    #id: Number = 0;
    #email: String = "";
    #role: String = "Employee";

    constructor(name, id, email) {
        this.#name = name;
        this.#id = id;
        this.#email = email;
    }
    
    getName(){
        return this.#name;
    }

    getId(){
        return this.#id;
    }

    getEmail(){
        return this.#email;
    }

    getRole(){
        return this.#role;
    }
}