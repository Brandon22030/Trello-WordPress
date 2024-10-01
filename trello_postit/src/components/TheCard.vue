<!-- eslint-disable prettier/prettier -->
<template>
	<li class="group relative rounded-md border-b border-gray-300 bg-white p-3 shadow hover:bg-gray-50">
		<div>
			<div class="">
				<h5 class="font-semibold text-gray-800">{{ task.title.rendered }}</h5>
				<p class="mt-2 max-w-max rounded-sm bg-blue-100 px-2 py-1 text-xs font-semibold text-gray-600">
					{{ task.date ? $dayjs(task.date).format("MMM DD, ddd") : "No Date" }}
				</p>
				<div class="mt-3 px-3"></div>
			</div>
			<div class="absolute top-1 right-1 bottom-1 hidden justify-between group-hover:grid">

				<!-- <button type="button" @click="openModal(task.id)" class="rounded-md bg-gray-50 px-2 hover:bg-gray-100"> -->
				<button type="button" @click="openModalShow(task.id)" class="rounded-md bg-gray-50 px-2 hover:bg-gray-100">
					<svg
						width="25px"
						height="25px"
						viewBox="0 0 32 32"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
					>
						<!-- Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch -->
						<title>icon 22 eye</title>
						<desc>Created with Sketch.</desc>
						<defs></defs>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							sketch:type="MSPage"
						>
							<g id="icon-22-eye" sketch:type="MSArtboardGroup" fill="#000000">
								<path
									d="M16,9 C7,9 3,16 3,16 C3,16 7,23.000001 16,23 C25,22.999999 29,16 29,16 C29,16 25,9 16,9 L16,9 L16,9 Z M16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 8,22.0000006 16,22 C24,21.999999 27.8000488,16 27.8000488,16 C27.8000488,16 24,10 16,10 L16,10 L16,10 Z M16,20 C18.2091391,20 20,18.2091391 20,16 C20,13.7908609 18.2091391,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,18.2091391 13.7908609,20 16,20 L16,20 L16,20 Z M16,19 C17.6568543,19 19,17.6568543 19,16 C19,14.3431457 17.6568543,13 16,13 C14.3431457,13 13,14.3431457 13,16 C13,17.6568543 14.3431457,19 16,19 L16,19 L16,19 Z M16,17 C16.5522848,17 17,16.5522848 17,16 C17,15.4477152 16.5522848,15 16,15 C15.4477152,15 15,15.4477152 15,16 C15,16.5522848 15.4477152,17 16,17 L16,17 L16,17 Z"
									id="eye"
									sketch:type="MSShapeGroup"
								></path>
							</g>
						</g>
					</svg>
				</button>
				<button type="button" @click="openModal" class="rounded-md bg-gray-50 px-2 hover:bg-gray-100">
					<PencilIcon class="h-4 w-4 text-center text-gray-500" />
				</button>
				<button @click="deleteCat(task.id, listId)" class="bg-gray-60 rounded-md px-2 hover:bg-gray-100">
					<TrashIcon class="h-4 w-4 text-center text-red-500" />
				</button>
			</div>
	
			<!-- <AddCard v-if="isOpen" :is-open="isOpen" :task="task" :is-edit="true" @close-modal="closeModal(task.id)" /> -->

			<AddCard v-if="isOpen" :is-open="isOpen" :task="task" :is-edit="true" @close-modal="closeModal" />
			<DetailCard v-if="ouvert" :post-id="task.id" :is-open="ouvert" :is-show="true" @close-modal="closeModalShow" />
		</div>
	</li>
</template>

<script setup>
import { ref } from "vue";
// import { useBoardStore } from "@/stores/board";
import AddCard from "./AddCard.vue";
import DetailCard from "./DetailCard.vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/solid";

import { useCategoryStore } from "@/stores/categoryStore";

import { useCommentairesStore } from "@/stores/commentStore";

const commentaires = useCommentairesStore();


const categoryStore = useCategoryStore();

const props = defineProps({ task: Object, listId: String });

// const boardStore = useBoardStore();

// Modal Open/Close Methods
const isOpen = ref(false);
const ouvert = ref(false);

function openModal() {
	isOpen.value = true;
}

function openModalShow(postId) {

	ouvert.value = true;

	commentaires.fetchPost(postId);

}
function closeModal() {
	isOpen.value = false;
}
function closeModalShow() {
	ouvert.value = false;
}
// Task Methods
const deleteCat = (postId, categoryId) => {
	categoryStore.deletePost(postId, categoryId);
};
</script>

<style scoped>
.drag > div {
	transform: rotate(5deg);
}
.ghost {
	background: lightgray;
	border-radius: 6px;
}
.ghost > div {
	visibility: hidden;
}
</style>

