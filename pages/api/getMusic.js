import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handle(req, res) {

  const allMusic = await prisma.music.findMany()
  const randomIndex = Math.floor(Math.random() * allMusic.length);
  const musicRandom = allMusic[randomIndex];

return res.status(200).json(musicRandom)
}