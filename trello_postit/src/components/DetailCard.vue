<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
	<TransitionRoot appear :show="isOpen" as="template">
		<Dialog as="div" @close="emit('closeModal')">
			<div class="fixed inset-0 z-10 overflow-y-auto">
				<div class="min-h-screen px-4 text-center">
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0"
						enter-to="opacity-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100"
						leave-to="opacity-0"
					>
						<DialogOverlay class="fixed inset-0 bg-black bg-opacity-50" />
					</TransitionChild>

					<span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<div
							class="my-8 inline-block w-full max-w-[40%] transform overflow-hidden rounded-2xl bg-gray-50 p-6 text-left align-middle shadow-xl transition-all"
						>
							<DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
								Details de la carte
							</DialogTitle>

							<!-- <div>{{  }}</div> -->

							<div class="mt-4">
								<!-- <div>
										<label class="mb-2 block text-sm font-bold text-gray-700" for="title">
											Titre
										</label>
										<input
											type="text"
											name="title"
											autocomplete="off"
											placeholder="Enter le titre..."
											class="form-input mb-2 w-full rounded"
										/>
									</div>

									<div>
										<label class="mb-2 block text-sm font-bold text-gray-700" for="description">
											Contenu
										</label>
										<textarea
											name="description"
											placeholder="Saisissez le contenu..."
											class="form-input mb-2 w-full rounded"
										/>
									</div> -->
								<div>
									<div class="border p-2" v-if="post">
										<div class="flex mt-2 gap-2 items-center">
											<div>
												<svg
													class="opacity-80"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														clip-rule="evenodd"
														d="M4 4C2.34315 4 1 5.34315 1 7V17C1 18.6569 2.34315 20 4 20H20C21.6569 20 23 18.6569 23 17V7C23 5.34315 21.6569 4 20 4H4ZM4 13C4 12.4477 4.44772 12 5 12H13C13.5523 12 14 12.4477 14 13C14 13.5523 13.5523 14 13 14H5C4.44772 14 4 13.5523 4 13ZM5 15C4.44772 15 4 15.4477 4 16C4 16.5523 4.44772 17 5 17H11C11.5523 17 12 16.5523 12 16C12 15.4477 11.5523 15 11 15H5ZM14 16C14 15.4477 14.4477 15 15 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H15C14.4477 17 14 16.5523 14 16ZM17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14H19C19.5523 14 20 13.5523 20 13C20 12.4477 19.5523 12 19 12H17Z"
														fill="black"
													></path>
												</svg>
											</div>

											<div
												class="text-2xl font-bold text-slate-800"
												v-html="post.title.rendered"
											></div>
										</div>
										<div class="flex mt-5 gap-2">
											<div>
												<svg
													class="w-6 opacity-50 h-6"
													width="100%"
													height="100%"
													viewBox="0 0 24 24"
													version="1.1"
													xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink"
													xml:space="preserve"
													xmlns:serif="http://www.serif.com/"
													style="
														fill-rule: evenodd;
														clip-rule: evenodd;
														stroke-linejoin: round;
														stroke-miterlimit: 2;
													"
												>
													<g id="Icon">
														<circle cx="5.5" cy="4.5" r="0.75"></circle>
														<circle cx="8" cy="4.5" r="0.75"></circle>
														<circle cx="10.5" cy="4.5" r="0.75"></circle>
														<path
															d="M22.75,9c0,0.414 -0.336,0.75 -0.75,0.75c-0.414,0 -0.75,-0.336 -0.75,-0.75l0,-4.5c0,-0.966 -0.783,-1.75 -1.75,-1.75l-15,0c-0.967,0 -1.75,0.783 -1.75,1.75l0,15c0,0.967 0.783,1.75 1.75,1.75l8.5,0c0.414,0 0.75,0.336 0.75,0.75c-0,0.414 -0.336,0.75 -0.75,0.75l-8.5,0c-1.795,-0 -3.25,-1.455 -3.25,-3.25l0,-15c0,-1.795 1.455,-3.25 3.25,-3.25l15,0c1.795,0 3.25,1.455 3.25,3.25l0,4.5Z"
														></path>
														<path
															d="M17.601,10.868c0.409,-0.876 1.45,-1.255 2.326,-0.846l1.812,0.845c0.876,0.409 1.255,1.45 0.847,2.326l-3.381,7.25c-0.063,0.134 -0.164,0.247 -0.29,0.324l-3.081,1.874c-0.214,0.13 -0.479,0.145 -0.706,0.039c-0.228,-0.106 -0.387,-0.319 -0.425,-0.567l-0.544,-3.564c-0.023,-0.146 -0.001,-0.296 0.061,-0.43l3.381,-7.251Zm1.36,0.634l-3.285,7.045l0.34,2.228l1.925,-1.171l3.285,-7.045c0.059,-0.125 0.005,-0.274 -0.121,-0.332l-1.812,-0.846c-0.125,-0.058 -0.274,-0.004 -0.332,0.121Z"
														></path>
														<path
															d="M22,6.25c0.414,-0 0.75,0.336 0.75,0.75c0,0.414 -0.336,0.75 -0.75,0.75l-20,0c-0.414,-0 -0.75,-0.336 -0.75,-0.75c0,-0.414 0.336,-0.75 0.75,-0.75l20,0Z"
														></path>
														<path
															d="M17.119,13.678c-0.376,-0.175 -0.538,-0.622 -0.363,-0.997c0.175,-0.375 0.621,-0.538 0.997,-0.363l3.625,1.691c0.375,0.175 0.538,0.621 0.363,0.996c-0.175,0.376 -0.622,0.538 -0.997,0.363l-3.625,-1.69Z"
														></path>
														<path
															d="M6,11.25c-0.414,0 -0.75,-0.336 -0.75,-0.75c-0,-0.414 0.336,-0.75 0.75,-0.75l7,0c0.414,0 0.75,0.336 0.75,0.75c-0,0.414 -0.336,0.75 -0.75,0.75l-7,0Z"
														></path>
														<path
															d="M6,15.25c-0.414,0 -0.75,-0.336 -0.75,-0.75c-0,-0.414 0.336,-0.75 0.75,-0.75l7,0c0.414,0 0.75,0.336 0.75,0.75c-0,0.414 -0.336,0.75 -0.75,0.75l-7,0Z"
														></path>
														<path
															d="M6,19.25c-0.414,0 -0.75,-0.336 -0.75,-0.75c-0,-0.414 0.336,-0.75 0.75,-0.75l5,0c0.414,0 0.75,0.336 0.75,0.75c-0,0.414 -0.336,0.75 -0.75,0.75l-5,0Z"
														></path>
													</g>
												</svg>
											</div>

											<div
												class="text-md text-slate-700"
												v-html="post.content.rendered"
											></div>
										</div>
									</div>
									<div class="mb-16">
										<form @submit.prevent="addComment(postId)" action="" class="">
											<label
												class="text-xl text-center mt-5 mb-2 block font-semibold text-gray-700"
												for="description"
											>
												Activite ✍️
											</label>

											<div class="mt-10 flex gap-3 focus:outline-none">
												<svg
													class="h-10 w-10 opacity-60"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 64 64"
												>
													<title>1</title>
													<g id="Layer_82" data-name="Layer 82">
														<path
															d="M37.44,14.72a5.48,5.48,0,0,0,1-1.23l.88-1.61A5.51,5.51,0,0,0,37.1,4.42L33.87,2.65A5.5,5.5,0,0,0,26.4,4.82l-.88,1.61A5.47,5.47,0,0,0,25,7.87a2,2,0,0,0-2.43.91l-20.3,37a2,2,0,0,0-.25,1l.51,13.24a2,2,0,0,0,3,1.65L16.95,55a2,2,0,0,0,.74-.76l20.3-37A2,2,0,0,0,37.44,14.72ZM29,8.35l.88-1.61A1.49,1.49,0,0,1,30.8,6,1.51,1.51,0,0,1,31.22,6a1.49,1.49,0,0,1,.72.19l3.23,1.77a1.5,1.5,0,0,1,.59,2l-.88,1.61a1.5,1.5,0,0,1-2,.6l-2-1.08-1.27-.7A1.5,1.5,0,0,1,29,8.35ZM14.45,51.88,6.38,56.59,6,47.24,25.09,12.47l5,2.74.84.46h0l2.6,1.43Z"
														></path>
														<path d="M60,58H24.6a2,2,0,1,0,0,4H60a2,2,0,0,0,0-4Z"></path>
														<path
															d="M60,47.43H29.81a2,2,0,1,0,0,4H60a2,2,0,0,0,0-4Z"
														></path>
														<path d="M60,36.85H35.2a2,2,0,0,0,0,4H60a2,2,0,0,0,0-4Z"></path>
														<path
															d="M42.3,30.28H60a2,2,0,0,0,0-4H42.3a2,2,0,0,0,0,4Z"
														></path>
													</g>
												</svg>
												<input
													v-model="content"
													name="description"
													type="text"
													placeholder="🙂 Ajouter un commentaire..."
													class="form-input mb-2 w-full rounded border-gray-300 focus:outline-none"
												/>
											</div>

											<button
												type="submit"
												class="focus-visible:ring-gyay-500 float-left mx-12 inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
											>
												Enregistrer
											</button>
										</form>
									</div>

									<div class="" v-for="comment in commentaires.comment" :key="comment.id">
										<!-- <div v-html="comment.content.rendered"></div> -->
										<UpdateComment
											:content="comment.content.rendered"
											:id="comment.id"
											:id_comment="comment.id"
											:post_id="comment.post"
										/>
									</div>
									<div v-for="comment in commentaires.comments" :key="comment.id">
										<div
											v-if="props.id == comment.id"
											:id="comment.id"
											v-html="comment.content.rendered"
										></div>
									</div>
								</div>

								<p class="mt-4 text-center text-sm text-red-500" v-if="error">
									{{ error }}
								</p>

								<div class="mt-14">
									<div>
										<button
											type="button"
											class="float-right inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
											@click="emit('closeModal')"
										>
											Retour
										</button>
									</div>
								</div>
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
import { useCategoryStore } from "@/stores/categoryStore";
import UpdateComment from "@/components/UpdateComment.vue";
import { useCommentairesStore } from "@/stores/commentStore";
const content = ref("");
const commentaires = useCommentairesStore();
const categoryStore = useCategoryStore();
const post = ref(null);
const props = defineProps({
	task: Object,

	postId: {
		type: String,
		required: true,
	},
	listId: String,
	isOpen: {
		type: Boolean,
		default: false,
	},
	isShow: {
		type: Boolean,
		default: false,
	},
});

// onMounted(async() => {
// 	await commentaires.fetchPosts();
// 	await commentaires.fetchPost(props.postId);
// 	console.log(commentaires.comment);
// });
onMounted(async () => {
	await categoryStore.fetchPostById(props.postId);
	post.value = categoryStore.onePost;
});

const addComment = (postId) => {
	commentaires.createComment(postId, content.value);
	console.log(postId);
	content.value = "";
};
const deleteComment = (postId, commentId) => {
	commentaires.deleteComment(postId, commentId);
};
const newPostTitle = ref("");
// const newPostDate = ref("")

// import { useBoardStore } from "@/stores/board";

const emit = defineEmits(["onCardCreated", "closeModal"]);

// const boardStore = useBoardStore();

// let task = reactive({
// 	title: props.isEdit ? props.task.title : "",
// 	description: props.isEdit ? props.task.description : "",
// 	date: props.isEdit ? props.task.date : "",
// });

let error = ref("");

function addNewCard(categoryId) {
	// if (!task.title) {
	// 	error.value = "Title field is required";
	// 	return;
	// }

	categoryStore.createPost(categoryId, newPostTitle.value);
	// 	listId: props.listId,addItemtitle: task.title,
	// 	description: task.description,
	// 	date: task.date,
	// });

	newPostTitle.value = "";

	emit("closeModal");

	// task.title = "";
	// task.description = "";
	// task.date = "";
	// error.value = "";
	// emit("onCardCreated");
	// emit("closeModal");
}
</script>

