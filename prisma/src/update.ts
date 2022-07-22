import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const cannel = {name:'My channel', description:'nice channel', subscribers:100, link:'https://www.youtube.com/c/mychannel' };

    const res = await prisma.cannel.update({
      where:{
        id: 9
      },
      data:{
        name: 'New channel name',
        subscribers: 2000
      },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
}

main();