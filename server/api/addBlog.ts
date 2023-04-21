// import { PrismaClient } from "@prisma/client";
import useResponse from "~/composables/useResponse";
import { createHash } from "crypto";

export default defineEventHandler(async (event: any) => {
  const body = await readBody(event);
  const { issueToken } = useRuntimeConfig();
  
  const hash = createHash("md5").update(body.password).digest("hex");
  if (hash != issueToken) {
    return useResponse(undefined, 0, "密码错误");
  }

  // const prisma = new PrismaClient();

  // await prisma.blog.create({
  //   data: {
  //     title: "第一篇blog",
  //     address: "blog",
  //   },
  // });

  // prisma.$disconnect();

  return useResponse(body, 0, "添加成功");
});
