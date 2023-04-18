<template>
	<div class="flex flex-col items-center">
		<div class="flex items-center">
			<span class="icon md:icon mr-8 i-tabler-pencil-plus"></span>
			<h3 class="text-7 md:text-10"> Create Blog</h3>
		</div>
		<div class="w-4/5 m-10  md:p-5 flex flex-col gap-6 md:gap-8">
			<div class="icon i-tabler-h-1" />
			<div class="rounded-2xl p-2 md:p-5 box-border border flex items-center text-3 md:text-6 focus-within:border-red-600">
				<label class="mr-3  w-20 md:w-35">Title</label>
				<input class="flex-1 bg-transparent appearance-none outline-none" type="text"
					placeholder="Please enter a title">
			</div>

			<div class="icon i-tabler-brand-github-filled" />

			<div class="rounded-2xl p-2 md:p-5 box-border border flex items-center text-3 md:text-6 focus-within:border-red-600">
				<label class="mr-3  w-20 md:w-35">Git Hub</label>
				<input class="flex-1 bg-transparent appearance-none outline-none" type="text"
					placeholder="Please enter the github repository address">
			</div>

			<button class="w-full h-10 md:h-18 text-3 bg-red-600 rounded-2xl md:text-6 hover:shadow hover:md:shadow-md text-white" @click="submit">Submit</button>
		</div>

	</div>
</template>
<script setup lang='ts'>
definePageMeta({
	layout: "admin"
})

const submit = () => {
	console.log("123")
}

</script>
<style lang='scss'></style>