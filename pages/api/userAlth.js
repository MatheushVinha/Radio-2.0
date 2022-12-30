import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export default async function handler(req, res) {

  const { method } = req;

  if (method === "GET") {

    const user = await prisma.user.findMany()

    res.status(200).json({
      data: {
        user
      },
    })

  } else if (method === "POST") {

    try {

      const { name } = req.body;

      const user = await prisma.user.create({
        data: {
          name
        }
      })
      return res.status(201).json({
        data: user,
      })
    } catch (error) {
      return res.status(404).json({ message: error })
    }

  }

  return res.status(404).json({ message: "Route not found" })
}
