<template>
	<div class="container h-screen flex items-center justify-center flex-col">

		<button @click="getUserInfo">获取个人信息</button>

	</div>
</template>
<script setup lang='ts'>

definePageMeta({
	title: "Home | 首页"
})

const getUserInfo = async () => {
	const { data } = await useFetch("api/getinfo")
	console.log(data)
}


</script>
<style lang='scss'>
.logo {
	background-color: #000;
	border-radius: 15px;
}
</style>