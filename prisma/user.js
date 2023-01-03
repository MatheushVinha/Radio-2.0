// /prisma/user.js
import prisma from './prisma'

// READ
export const getAllUsers = async () => {
  const users = await prisma.user.findMany({})
  return users
}

export const getUser = async id => {
  const user = await prisma.user.findUnique({
    where: { id }
  })
  return user
}

//READ BY EMAIL

export const getUserByemail = async email => {
  const user = await prisma.user.findUnique({
    where: { email }
  })
  return user
}

// CREATE
export const createUser = async (name, email, recado, senha, perfil) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
      recado,
      senha,
      perfil
    }
  })
  return user
}

// UPDATE
export const updateUser = async (id, updateData) => {
  
  const data = {};
  if (updateData.name) {
    data.name = updateData.name;
  }
  if (updateData.email) {
    data.email = updateData.email;
  }
  if (updateData.senha) {
    const senha = Number(updateData.senha);
    data.senha =senha
  }
  if (updateData.recado) {
    data.recado = updateData.recado;
  }
  
  const user = await prisma.user.update({
    where: {
      id
    },
    data
  })
  return user
}

// DELETE
export const deleteUser = async id => {
  const user = await prisma.user.delete({
    where: {
      id
    }
  })
  return user
}