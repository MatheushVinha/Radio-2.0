import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res) {
  let { userId, currentMusic } = req.body

  const User = await prisma.user.findUnique({ where: { id: userId } });

  if (!User) {
    return res.status(404).send("Usuário não encontrado");
  }

  const music = await prisma.music.findUnique({
    where: {
      id: currentMusic
    }
  })
  try {

    const hasSongInLibrary = await prisma.favUser.findMany({
      where: {
        AND: [
          { idUsuario: User.id, },
          { idMusica: music.id }
        ],
      }
    })

    if (hasSongInLibrary == false) {

      const favoriteMusic = await prisma.music.update({
        where: { id: music.id },
        data: {
          nunberFav: music.nunberFav + 1
        }
      })

      if (favoriteMusic) {
        await prisma.favUser.create({
          data: {
            idUsuario: User.id,
            idMusica: music.id
          }
        })
      }
    }

    return res.status(200).json({ music, hasSongInLibrary })

  } catch (error) {
    return res.json({ erro: error.message })
  }
}