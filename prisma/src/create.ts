import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  try {
    const data = [
      {name:'Devanshi Panchal', description:'Software development',subscribers:500,link:'https://www.youtube.com/c/devanshipanchal' },
      {name:'Bans Thakkar', description:'travel blog',subscribers:10,link:'https://www.youtube.com/c/bansaari' },
      {name:'Jims Bond', description:'food blog',subscribers:20,link:'https://www.youtube.com/c/Jims' },
      {name:'hetal Patil', description:'marathi stuff',subscribers:25,link: 'https://www.youtube.com/c/hetu' },
    ];

    const cannel = {name:'Jayshree patil',description:'Something', subscribers: 60, link:'https://www.youtube.com/c/jayshree' };

    const res = await prisma.cannel.create({
      data:cannel,
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