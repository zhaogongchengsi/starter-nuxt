import { $fetchGithub } from "../utils/fetchGithub";
import useResponse from "~/composables/useResponse";

export default defineEventHandler(async () => {

  const info = await $fetchGithub("user")

  return useResponse<any>(info);
});
