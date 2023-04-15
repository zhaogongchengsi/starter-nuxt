<template>
	<div class="h-screen flex items-center justify-center flex-col">

		<h1 class="text-#fff">{{ appConfig.title }}</h1>

		<a href="#" class="logo">
			<img src="/icon.png" alt="">
		</a>

		{{ data }}

	</div>
</template>
<script setup lang='ts'>
const appConfig = useAppConfig() as { title: string }

const { data } = useFetch("/api/hello")

</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>