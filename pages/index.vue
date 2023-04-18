<template>
	<div class="h-screen flex items-center justify-center flex-col">

		<h1 class="dark:text-#fff text-15 font-600">{{ appConfig.title }}</h1>

		<a href="#" class="rounded-2xl bg-black w-60 m-20">
			<img src="/icon.png" alt="">
		</a>

		<ColorMode />

	</div>
</template>
<script setup lang='ts'>
const appConfig = useAppConfig() as { title: string }



</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>