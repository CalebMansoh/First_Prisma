import "dotenv/config";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {

  //Creating a user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Joe",
  //     email: "joe@gmail.com"
  //   }
  // })

   // Getting Users
  // const users = await prisma.user.findMany({
  //   include: {
  //     articles: true
  //   }
  // });

  //create article and association
  // const article = await prisma.article.create ({
  //   data: {
  //     title: 'caman ',
  //     body: 'caman  article',
  //     author: {
  //       connect:{
  //         id: 1
  //       }
  //     }
  //   }
  // })

  //get all articles

  const articles = await prisma.article.findMany();

 // create user andarticle and associate them

//  const user = await prisma.user.create({
//   data: {
//     name: "raymond",
//     email: "raymond@gmail.com",
//     articles: {
//       create: {
//         title: "Raymod Article",
//         body: "Zigi Article"
//       }
//     }
//   }
//  })

//looping through users articles
// const article = await prisma.article.create({
//   data:{
//     title: "raymond article",
//     body: "Zigi sECOND aRTICLE",
//     author: {
//       connect: {
//         id: 7
//       }
//     }
//   }
// })


  // users.forEach((user) => {
  //   console.log(`User: ${user.name}, Email: ${user.email}`);
  //   console.log("Article:");
  //   user.articles.forEach((article) => {
  //     console.log(`-Title: ${article.title}, -Body: ${article.body}`);
  //   })
  // })

  //Update Data

  // const user = await prisma.user.update({
  //   where: {
  //     id: 1
  //   },
  //   data: {
  //     name: ' Leagacy'
  //   }
  // })

  //Delete DATA

  // const article = await prisma.article.delete({
  //   where: {
  //     id: 5
  //   }
  // })


  console.log(articles)
}

main()
  .then(async () => {    
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });