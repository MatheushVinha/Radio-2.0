import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser
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
        const user = await createUser(name, email, recado, senha, perfil)
        return res.json(user)
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




// const { method } = req;

//   if (method === "GET") {

//     const user = await prisma.user.findMany()

//     res.status(200).json({
//       data: {
//         user
//       },
//     })

//   } else if (method === "POST") {

//     try {

//       const { name } = req.body;

//       const user = await prisma.user.create({
//         data: {
//           name
//         }
//       })
//       return res.status(201).json({
//         data: user,
//       })
//     } catch (error) {
//       return res.status(404).json({ message: error })
//     }

//   }

//   return res.status(404).json({ message: "Route not found" })
