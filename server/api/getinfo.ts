import { $fetchGithub } from "../utils/fetchGithub";
import useResponse from "~/composables/useResponse";

// 获取用户基础信息
export default defineEventHandler(async () => {

  const info = await $fetchGithub("user")

  return useResponse<any>(info);
});
