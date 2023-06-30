// const users = require('../utils/users')

// const login = (req, res) => {
//   const email = req.query.email;
//   const password = req.query.password;

// const userFound = users.find( u => u.email === email && u.password === password);

// return userFound
// ? res.status(200).json({ access: true})
// // : res.status(200).json({ access: false})
// : res.status(404).json({ access: false})

// }

// module.exports = {
//     login
// };

const {User} = require('../DB_connection.js');

module.exports = async (req, res) => {
  try {
    const { email, password} = req.query;

    if(!email || !password) return res.status(400).send('Faltan datos');

    const user = await User.findOne({where: {email}})
    if(!user) return res.status(404).send('Usuario no encontrado')

    return user.password === password

    ? res.json({access: true})
    : res.status(403).send('Contraseña incorrecta')

  } catch (error) {
    return res.status(500).send(error.message)
  }
}
