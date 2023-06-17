const users = require('../utils/users')

const login = (req, res) => {
  const email = req.query.email;
  const password = req.query.password;

const userFound = users.find( u => u.email === email && u.password === password);

return userFound
? res.status(200).json({ access: true})
// : res.status(200).json({ access: false})
: res.status(404).json({ access: false})

}

module.exports = {
    login
};