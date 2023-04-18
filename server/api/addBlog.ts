import { PrismaClient } from "@prisma/client";
import useResponse from "~/composables/useResponse";

export default defineEventHandler(async () => {
  const prisma = new PrismaClient();

  await prisma.blog.create({
    data: {
      title: "第一篇blog",
      address: "blog",
    },
  });

  prisma.$disconnect();

  return useResponse('ok');
});
