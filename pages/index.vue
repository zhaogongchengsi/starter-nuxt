<template>
	<div class="h-screen flex items-center justify-center flex-col">

		<h1 class="dark:text-#fff">{{ appConfig.title }}</h1>

		<a href="#" class="logo">
			<img src="/icon.png" alt="">
		</a>

		{{ data }}

		<button @click="setDarkMode">切换黑色</button>

	</div>
</template>
<script setup lang='ts'>

const appConfig = useAppConfig() as { title: string }
const { data } = useFetch("/api/hello")

const theme = useColorMode()

const setDarkMode = () => {
	if (theme.preference === 'dark') {
		theme.preference = 'light'
	} else {
		theme.preference = 'dark'
	}
}



</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>