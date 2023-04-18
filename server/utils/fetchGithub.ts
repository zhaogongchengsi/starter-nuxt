export async function $fetchGithub(url: string) {
  const { github } = useRuntimeConfig();
  return await $fetch(`https://api.github.com/${url}`, {
    headers: {
      Authorization: "Bearer " + github.token,
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
    },
  });
}
