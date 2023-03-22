import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  const prisma = new PrismaClient();

  const item = await prisma.item.findFirst({
    where: { userId: "genkofcam" },
    // include: {
    //   user: true,
    //   _count: { select: { Favorite: true } },
    // },
  });
  console.log(item);

  res.status(200).json({ name: item });
};

export default handler;
