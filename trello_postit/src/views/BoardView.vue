<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
	<div class="flex h-screen flex-col bg-gradient-to-r bg bg-cover from-purple-500 to-pink-500">

		<TheNavbar />

		<main class="flex-1 overflow-hidden">
			<div class="flex h-full flex-col mt-[3rem] pb-[5rem]">

				<!-- <div class="flex shrink-0 items-center justify-between p-4">
					<h1 class="text-2xl font-bold text-white">Enin là</h1>
				</div> -->

				<div class="flex-1 overflow-x-auto">
					<div class="inline-flex h-full items-start space-x-4 px-4 pb-4">
						<!-- Board Lists -->
						<TheList
							v-for="category in categoryStore.categories"
							:key="category.id"
							:category="category"
							@on-start="onDragStart"
							@on-drop="onDragDrop"
						/>

						<!-- Add List -->
						<div class="w-72">
							<AddList />
						</div>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
// Components
import TheNavbar from "../components/TheNavbar.vue";
import TheList from "../components/TheList.vue";
import AddList from "../components/AddList.vue";
import { useCategoryStore } from "@/stores/categoryStore";
import { onMounted } from "vue";

onMounted(async() => {

await categoryStore.fetchCategories();

});
// // Utils
// import { getIndexOfItemById } from "../utils/board";

// // // Icons
// // import { CogIcon } from "@heroicons/vue/solid";

// // Store
// import { usecategoryStore } from "@/stores/board";

// // Data
// const categoryStore = usecategoryStore();


const categoryStore = useCategoryStore();

// const lists = categoryStore.lists;

// Drag n' Drop fonctions
function onDragStart({ evt }) {
	evt.dataTransfer.dropEffect = "move";
	evt.dataTransfer.effectAllowed = "move";

	evt.dataTransfer.setData("itemID", evt.srcElement.__draggable_context.element.id);
	evt.dataTransfer.setData("oldIndex", evt.srcElement.__draggable_context.index);
}

function onDragDrop({ evt, listId }) {

	const itemID = evt.dataTransfer.getData("itemID");

	const fromList = categoryStore.getListByItemId(itemID);
	const oldIndex = evt.dataTransfer.getData("oldIndex");

	const toList = categoryStore.getListById(listId);
	const newIndex = getIndexOfItemById(lists, itemID);

	categoryStore.moveItem([fromList.id, oldIndex, toList.id, newIndex]);

}

</script>

<style scoped>
::-webkit-scrollbar {
	width: 10px;
	height: 10px;
}	
::-webkit-scrollbar-thumb {
	background: gray ;
	border-radius: 6px;
}

.bg{
	background-image: url("../assets/img/bg.jpg")
}
</style>
