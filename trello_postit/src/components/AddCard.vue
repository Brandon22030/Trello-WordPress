<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="emit('closeModal')">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
						enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
						leave-to="opacity-0">
						<DialogOverlay class="fixed inset-0 bg-black bg-opacity-50" />
					</TransitionChild>

					<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

					<TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95">
						<div
							class="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
								{{ isEdit ? "Edit Task" : "Add Task" }}
							</DialogTitle>

							<div class="mt-4">
								<form action="" @submit.prevent="isEdit ? updateCard(task.id, listId) : addNewCard(listId)" class="w-full">
									<div :class="{ 'input-container': true, 'input-error': error.title }">
										<label class="mb-2 block text-sm font-bold text-gray-700" for="title">
											Titre
										</label>
										<input v-model="newPostTitle" type=props.task.title name="title" autocomplete="off"
											placeholder="Enter le titre..." class="form-input mb-2 w-full rounded" />
										<span v-if="error.title" class="text-red-600">{{ error.title }}</span>
									</div>

									<div :class="{ 'input-container': true, 'input-error': error.content }">
										<label class="mb-2 block text-sm font-bold text-gray-700" for="description">
											Contenu
										</label>
										<textarea v-model="newPostContent" name="description"
											placeholder="Saisissez le contenu..." class="form-input mb-2 w-full rounded" />
										<span v-if="error.content" class="text-red-600">{{ error.content }}</span>
									</div>

									<div class="mt-4">
										<div>
											<button type="button"
												class="float-left inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
												@click="emit('closeModal')">
												Annuler
											</button>
										</div>
										<div>
											<button type="submit"
												class="float-right inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
												>
												{{ isEdit ? "Save" : "Create" }}
											</button>
										</div>
									</div>
									<div v-if="formError">{{ formError }}</div>
								</form>
							</div>
						</div>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
	
<script setup>
import { ref, reactive, onMounted } from "vue";
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay, DialogTitle } from "@headlessui/vue";
import { useCategoryStore } from '@/stores/categoryStore';

const categoryStore = useCategoryStore();

const newPostTitle = ref(props.isEdit ? props.task.title.rendered : "")

const newPostContent = ref(props.isEdit ? props.task.content.rendered.replace(/<\/?[^>]+(>|$)/g, "") : "")

const formError = ref('')

const props = defineProps({
	listId: String,
	task: Object,
	isOpen: {
		type: Boolean,
		default: false,
	},
	isEdit: {
		type: Boolean,
		default: false,
	},
});

const emit = defineEmits(["onCardCreated", "closeModal"]);

const error = ref({ title: '', content: '' })


const validateTitle = () => {

	if (!newPostTitle.value.trim()) {
    
		error.value.title = 'Title is required and cannot be blank spaces.'
	} 

	else if (newPostTitle.value.length < 3) {

		error.value.title = 'Title must be at least 3 characters.'

	} else {

	error.value.title = ''

	}
}

const validateContent = () => {

	if (!newPostContent.value.trim()) {

		error.value.content = 'Content is required and cannot be blank spaces.'

	} else if (newPostContent.value.length < 5) {
    
		error.value.content = 'content must be at least 3 characters.'

	} else {
    
		error.value.content = ''

	}
}


// let error = ref("");

function addNewCard(categoryId) {

	validateTitle();
	validateContent();

	if (!error.value.title && !error.value.content) {
	
		formError.value = '';

		try{

			categoryStore.createPost(
		
				categoryId, 
	
				newPostTitle.value, 
	
				newPostContent.value

			);

			emit("closeModal");

		} catch (error) {

			formError.value = `Failed to submit message: ${error.message}`

		}

	} 

};

function updateCard(postId, categoryId) {

	validateTitle();

	validateContent();

	if (!error.value.title && !error.value.content) {

		formError.value = '';

		try{

			categoryStore.updateCard(
		
				postId,

				newPostTitle.value, 

				newPostContent.value,

				categoryId

			);

			emit("closeModal");

		} catch(error) {

			formError.value = `Failed to submit message: ${error.message}`

		}

	}



	console.log(categoryId)

}
</script>
