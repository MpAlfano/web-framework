import { User } from "./models/User";

const user = new User({ id: 1 });

user.set({ name: "new", age: 400 });

user.save();
