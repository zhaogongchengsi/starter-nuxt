<template>
	<button @click="setDarkMode" class="w-10 h-10 text-black dark:text-white">
		<ClientOnly>
			<span v-if="theme.value === 'dark'" class="block w-full h-full i-tabler-moon"></span>
			<span v-if="theme.value === 'light'" class="block w-full h-full i-tabler-moon-off"></span>
			<template #fallback>
				<span class="block w-full h-full i-tabler-moon-off"></span>
			</template>
		</ClientOnly>
	</button>
</template>
<script setup lang='ts'>
const theme = useColorMode()
const setDarkMode = () => {
	if (theme.preference === 'dark') {
		theme.preference = 'light'
	} else {
		theme.preference = 'dark'
	}
}
</script>
<style lang='scss'></style>