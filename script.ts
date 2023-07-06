import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    //Creando nuevo usuario
    const user = await prisma.user.create({
        data: {
          name: 'Alice1',
          email: 'alice1@prisma.io',
        },
      })
      console.log(user)

    //Visualizando todos los usuarios
    const users = await prisma.user.findMany()
    console.log(users)

  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })