import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res) {
  const { idUsuario } = req.body
  const idmusicas = await prisma.favUser.findMany({ where: { idUsuario: idUsuario}})
  const musicIds = idmusicas.map(item => item.idMusica);

  const musicas = await prisma.music.findMany({
    where: {
      id: {
        in: musicIds
      }
    }
  })
  return res.json(musicas)
}