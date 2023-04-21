<template>
	<div class="flex flex-col items-center">
		<div class="flex items-center">
			<span class="icon md:icon mr-8 i-tabler-pencil-plus"></span>
			<h1 class="text-7 md:text-10 font-600 text-green-800"> Create Blog</h1>
		</div>
		<div class="w-full m-10  md:p-5 flex flex-col gap-6 md:gap-8">
			<div class="icon i-tabler-h-1" />
			<div
				class="rounded-2xl p-2 md:p-5 box-border border flex items-center text-3 md:text-6 focus-within:border-red-600">
				<label class="mr-3  w-20 md:w-35">Title</label>
				<input v-model="issueInfo.title" class="flex-1 bg-transparent appearance-none outline-none" type="text"
					placeholder="Please enter a title">
			</div>

			<div class="icon i-tabler-brand-github" />

			<div
				class="rounded-2xl p-2 md:p-5 box-border border flex items-center text-3 md:text-6 focus-within:border-red-600">
				<label class="mr-3  w-20 md:w-35">Git Hub</label>
				<input v-model="issueInfo.githubAddress" class="flex-1 bg-transparent appearance-none outline-none"
					type="text" placeholder="Please enter the github repository address">
			</div>

			<div class="icon i-tabler-key" />

			<div
				class="rounded-2xl p-2 md:p-5 box-border border flex items-center text-3 md:text-6 focus-within:border-red-600">
				<label class="mr-3  w-20 md:w-35">Password</label>
				<input v-model="issueInfo.password" class="flex-1 bg-transparent appearance-none outline-none"
					type="password" placeholder="Please enter issue token">
			</div>

			<button :disabled="isOpen"
				class="w-full h-10 md:h-18 text-3 bg-red-600 rounded-2xl md:text-6 hover:shadow hover:md:shadow-md text-white outline- flex  justify-center items-center"
				@click="submit">
				<div :class="[isLoading ? 'i-tabler-loader rotate' : 'i-tabler-cloud-upload', 'mr-8 icon text-white']" />
				Submit
			</button>
		</div>

		<div v-if="isOpen" class="fixed top-10 inset-x-0 mx-auto flex justify-center">
			<div
				class="border py-2 px-4 border-green-600 rounded-lg bg-white dark:bg-black font-sans text-lg font-medium text-green-800">
				{{ dmessage }}
			</div>
		</div>
	</div>
</template>
<script setup lang='ts'>
import { type PublishInformation } from '~/types';

definePageMeta({
	layout: "admin"
})

const issueInfo = reactive<PublishInformation>({
	title: '',
	githubAddress: '',
	password: ''
})

const isLoading = ref(false)
const isOpen = ref(false)
const dmessage = ref('')

const submit = async () => {
	isLoading.value = true
	const { data } = await useFetch('api/addBlog', {
		method: 'POST',
		body: issueInfo
	})

	isLoading.value = false

	const { message, state } = data.value as any

	dmessage.value = message
	isOpen.value = true

	setTimeout(() => {
		isOpen.value = false
	}, 2 * 1000)

	issueInfo.password = ''
	issueInfo.githubAddress = ''
	issueInfo.title = ''

}

</script>
<style lang='scss'></style>