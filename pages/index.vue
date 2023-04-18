<template>
	<div class="h-screen flex items-center justify-center flex-col">

		<h1 class="dark:text-#fff text-15 font-600">{{ appConfig.title }}</h1>

		<a href="#" class="rounded-2xl bg-black w-60 m-20">
			<img src="/icon.png" alt="">
		</a>

		<ColorMode />

		<ul class="m-10">
			<li class="my-5 text-5 hover:text-cyan" v-for="(item, i) in data" :key="i">
				<a target="_blank" :href="item.link" class="block">
					<span>{{ item.name }}</span>
				</a>
			</li>
		</ul>

	</div>
</template>
<script setup lang='ts'>
const appConfig = useAppConfig() as { title: string }
const { data } = await useFetch<{ name: string, link: string, icon: string }[]>('/api/hello')

</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>