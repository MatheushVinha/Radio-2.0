import prisma from "../../prisma/prisma"

export default async function handle(req, res) {

  try {
    const { email, senha } = req.body

    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    if (!user) {
      return res.status(400).json({ msg: 'Usuario não encontrado', erro: true })
    }
    if (user.senha !== Number(senha)) {
      return res.status(400).json({ msg: 'Senha incorreta', erro: true})

    }

    return res.json({ user })
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message })
  }

}