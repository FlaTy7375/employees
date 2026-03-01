const login = async function(req, res) {
  res.send('login');
}

const register = async function(req, res) {
  res.send('register');
}

const current = async function(req, res) {
  res.send('current');
}

module.exports = {login, register, current}