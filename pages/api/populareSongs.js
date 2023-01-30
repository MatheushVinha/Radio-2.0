import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export default async function handle(req, res) {
  const musicas = await prisma.music.findMany({
    take: 5,
    orderBy: {nunberFav: "desc"}
  })
  return res.json(musicas)
}