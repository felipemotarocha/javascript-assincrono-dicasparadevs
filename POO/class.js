class User {
    constructor(username, password) { 
        this.username = username;
        this.password = password;
    }

    greeting() {
        console.log(`Gretting, ${this.username}`);
    }
}

const adminUser = new User();
console.log(adminUser)