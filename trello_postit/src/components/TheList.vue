<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
	<div class="flex max-h-full w-72 flex-col rounded-md bg-black/40" :data-category-id="category.id">
		<!-- List Title -->
		<div class="flex items-center justify-between px-3 py-2">
			<div v-if="show">
				<h3 class="text-sm font-semibold text-white" @click="input(category.id)">{{ category.name }}</h3>
			</div>
			<div v-else>
				<form 
				@submit.prevent="updateCard(category.id)"
				>
					<input type="text"
						v-model="name"
						class="focus:ring-gray-200 border-none w-[10rem] bg-black/5 text-white"
					>
					<input type="submit" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" value="Save" />
				</form>
				<button @click="input" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Cancel</button>
			</div>
			<!--  -->
			<button
				class="grid h-8 w-8 place-content-center rounded-md hover:bg-gray-300"
				@click="removeList(category.id)"
			>
				<XIcon class="h-5 w-5 text-gray-400" />
			</button>
		</div>

		<!-- List Cards -->
		<div class="flex flex-col overflow-hidden pb-3">
			<div ref="listRef" class="flex-1 overflow-y-auto px-3">
				<Draggable
					v-model="listItems"
					group="cards"
					item-key="id"
					class="space-y-3"
					tag="ul"
					@end="onDrop"
				>
					<template #item="{ element }">
						<TheCard :task="element" :list-id="category.id" :data-id="element.id" />
					</template>
				</Draggable>
			</div>

			<!-- Add Card -->
			<div class="mt-3 px-3 ">
				<button
					type="button"
					@click="openModal"
					class="flex w-full items-center rounded-md p-2 text-sm font-medium text-white hover:text-black hover:bg-gray-300"
				>
					<PlusIcon class="h-5 w-5" /> <span class="ml-1"> Créer une carte </span>
				</button>
			</div>

			<AddCard
				v-if="isOpen"
				:is-open="isOpen"
				:list-id="category.id"
				@on-card-created="onCardCreated()"
				@close-modal="closeModal"
			/>
		</div>
	</div>
</template>

<script setup>
// General
import { onMounted, ref } from "vue";
import Draggable from "vuedraggable";

import { useCategoryStore } from '@/stores/categoryStore';

	const show = ref(true)

    const categoryStore = useCategoryStore();

	const name = ref(props.category.name)


// Components
import TheCard from "../components/TheCard.vue";
import AddCard from "../components/AddCard.vue";

// Icons
import { XIcon, PlusIcon } from "@heroicons/vue/solid";

	function input(categoryId) {

		show.value = !show.value
		
	}

	function updateCard(categoryId){

		categoryStore.updateCategory(categoryId, name.value)

	}

// Props
const props = defineProps({ category: Object, task: Object });

// Data
const listItems = ref(props.category.posts);

// Modal Open/Close Methods
const isOpen = ref(false);
function openModal() {
	isOpen.value = true;
}
function closeModal() {
	isOpen.value = false;
}

// const posts = ref([]);

const onDrop = async(event) => {

	const MovedPost = event.item;

	const postId = MovedPost.dataset.id;

	console.log("Moved post ID: ", postId);

	const oldCatId = event.from.closest('[data-category-id]').dataset.categoryId;

	const newCatId = event.to.closest('[data-category-id]').dataset.categoryId;

	if(oldCatId !== newCatId) {

		await categoryStore.updatePostCategory(postId, newCatId);

	}

};


// categoryStore.fetchCategoriesAndPosts();

// List Methods
const removeList = (listId) => {
	categoryStore.deleteCategorie(listId);
};

const listRef = ref();

function onCardCreated() {
	listRef.value.scrollTop = listRef.value.scrollHeight;
}
</script>

<style scoped>
::-webkit-scrollbar {
	width: 7px;
}
::-webkit-scrollbar-track {
	background: #d1d5db;
	border-radius: 4px;
}
::-webkit-scrollbar-thumb {
	background: #9ca3af;
	border-radius: 4px;
}
</style>

