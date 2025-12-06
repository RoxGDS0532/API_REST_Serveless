import fs from "node:fs";
import path from "node:path";

const filePath = path.resolve("src/data/users.json");

const loadDB = () => {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
};

const saveDB = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const create = (user) => {
    const db = loadDB();

    const newUser = { id: db.currentId++, ...user };
    db.users.push(newUser);
    saveDB(db);
    return newUser;
};

const getAll = () => {
    const db = loadDB();
    return db.users;
};

const getById = (id) => {
    const db = loadDB();
    return db.users.find((u) => u.id === Number(id));
};

export default { create, getAll, getById };
