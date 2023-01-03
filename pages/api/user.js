import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  getUserByemail
} from '../../prisma/user'

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case 'GET': {
        if (req.query.id) {
          // api/users?id=1
          const user = await getUser(req.query.id)
          return res.status(200).json(user)
        } else {
          const users = await getAllUsers()
          return res.json(users)
        }
      }
      case 'POST': {
        const { name, email, recado, senha, perfil } = req.body

        const emailExist = await getUserByemail(email)

        if (emailExist) {
          return res.status(400).json({ msg: 'Email já existente', erro: true })
        }

        const user = await createUser(name, email, recado, Number(senha), perfil)
        return res.json({ user, erro: false })
      }
      case 'PUT': {
        const { id, ...updateData } = req.body
        const user = await updateUser(id, updateData)
        return res.json(user)
      }
      case 'DELETE': {
        const { id } = req.query
        const user = await deleteUser(id)
        return res.json(user)
      }
      default:
        break
    }

  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }
}
