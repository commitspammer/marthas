const fs = require("fs");

module.exports = {

  allUsers: () => {
    let usersJson = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"));
    return usersJson;
  },

  isUser: (email, password) => {
    let usersJson = JSON.parse(fs.readFileSync(__dirname + "/../data/users.json"));
    return usersJson.some(u => u.name == email && u.password == password);
  },

};
