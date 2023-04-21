import useResponse from "~/composables/useResponse";
import { $fetchGithub } from "../utils/fetchGithub";

// 获取github所有的仓库
export default defineEventHandler(async () => {
  const repose = await $fetchGithub("user/repos");

  return useResponse(repose)
});
