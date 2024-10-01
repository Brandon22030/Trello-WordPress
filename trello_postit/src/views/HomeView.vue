<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
	<main class="flex h-screen flex-col items-center justify-around">
		<div class="max-w-md text-center">
			<h1 class="text-2xl font-semibold text-gray-700">Bienvenue sur trello mon gars!!!</h1>
			<p class="mt-2 text-gray-500"></p>
		</div>

		<div>
			<RouterLink
				to="/board"
				class="rounded-lg bg-blue-100 px-4 py-2 text-center text-3xl font-extrabold text-gray-800 transition duration-150 ease-out hover:bg-blue-600 hover:text-white"
			>
				Voir mes Catégories
			</RouterLink>
		</div>

	</main>
</template>
