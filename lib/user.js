const { User } = require('../db')

exports.list = async(req, res) => {
  const users = await User.query()
  if (!users) return res.status(400).json({ message: 'No users were found' })
  res.json(users)
}

exports.find = async(req, res) => {
  const { id } = req.params
  const user = await User.query().findById(id)
  if (!user) return res.status(400).json({ message: 'No user found' })
  res.json(user)
}


