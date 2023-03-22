import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const main = async () => {
  console.log(`Start seeding ...`);

  await prisma.user.create({
    data: {
      userId: "genkofcam",
      name: "genkoku",
      email: faker.internet.email(),
      image:
        "https://pbs.twimg.com/profile_images/1209936471848669184/ron1aTL5_400x400.png",
    },
  });

  await prisma.user.create({
    data: {
      userId: "taku_egg_cg",
      name: "takumu",
      email: faker.internet.email(),
      image:
        "https://pbs.twimg.com/profile_images/1459076756535902209/Ddm91APc_400x400.jpg",
    },
  });

  await prisma.item.create({
    data: {
      user: {
        connect: {
          userId: "genkofcam",
        },
      },
      name: "genko clip",
      price: parseInt(faker.commerce.price()),
      image: "https://i.vimeocdn.com/channel/488804_980?mh=250",
      src: "https://pub-1390415108a448918cbbc01faa088da3.r2.dev/koll_low.mp4",
    },
  });

  await prisma.item.create({
    data: {
      user: {
        connect: {
          userId: "taku_egg_cg",
        },
      },
      name: "genko",
      price: parseInt(faker.commerce.price()),
      image: "https://i.vimeocdn.com/channel/488804_980?mh=250",
      src: "https://pub-1390415108a448918cbbc01faa088da3.r2.dev/koll_low.mp4",
    },
  });
};

main()
  .catch((e) => {
    console.error(e);
    // process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
