import { User } from "./models/User";

const user = new User({ name: "Eric", age: 20 });

user.on("change", () => {});
user.on("change", () => {});
user.on("tear", () => {});

console.log(user);
