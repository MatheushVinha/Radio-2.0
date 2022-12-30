import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {

  try {

    const userData = req.body

    const usuario = await prisma.user.create({
      name: userData.name,
      email: userData.email,
      senha: userData.senha,
      Recado: ''
    })

    if (!usuario) {
      return res.status(404).json({ error: true, message: "Deu Erro na criação do usuario" })
    }
    return res.status(200).json({ error: false, data: usuario, mensagem: "Usuario criado" })


  } catch (error) {
    return res.status(404).json({ error: true, message: "Deu em alguma coisa ai", erro: error })
  }


}