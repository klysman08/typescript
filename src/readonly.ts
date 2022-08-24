interface User {
    readonly id: number;
    name: string;
    email?: string;
}

let user: User = {
    id: 1,
    name: "John",
    email: "Klysman@gmail.com",
};

user.name = "Klysman";

console.log(user.name);
