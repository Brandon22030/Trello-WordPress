<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->

<script setup>
import { ref } from "vue";
import { useCommentairesStore } from "@/stores/commentStore.js";
const commentaires = useCommentairesStore();
const props = defineProps(["id", "content", "id_comment", "post_id"]);

const show = ref(false);
import { useRouter } from "vue-router";
const router = useRouter();
import { useCategoryStore } from "@/stores/categoryStore";
const categoryStore = useCategoryStore();


const contents = ref(props.content.replace(/<\/?[^>]+(>|$)/g, ""));

const comment = ref(props.id_comment);

const edit = async () => {

	commentaires.updateComment(props.id, contents.value, props.post_id);

	// if(commentaires.fetchPost(props.post_id)){

		handleClose()

	// }

	console.log(props.post_id)

};

const deleteComment = () => {

	commentaires.deleteComment(comment.value, props.post_id);

};

function handleUp() {
	show.value = true;
}

function handleSubmit() {
	console.log(props.id, contents.value);
}

function handleClose() {
	show.value = false;
}
</script>

<template>
	<div class=""  v-if="show">
		<form @submit.prevent="edit">
      <div class="my-auto mt-4 flex gap-3"  >
        <div>
				<svg
					class="mt-2 h-8 w-8"
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M57.94 9.12989L53.94 5.12989C53.4293 4.6189 52.8228 4.21354 52.1554 3.93698C51.4879 3.66041 50.7725 3.51807 50.05 3.51807C49.3275 3.51807 48.6121 3.66041 47.9447 3.93698C47.2772 4.21354 46.6708 4.6189 46.16 5.12989L7.17002 43.9999C6.99825 44.1774 6.87139 44.3934 6.80002 44.6299L2.56002 58.5899C2.48301 58.8494 2.47767 59.125 2.54457 59.3873C2.61147 59.6496 2.74812 59.8889 2.94002 60.0799C3.07817 60.2206 3.2432 60.332 3.42531 60.4076C3.60741 60.4832 3.80286 60.5214 4.00002 60.5199C4.14871 60.5196 4.29668 60.4994 4.44002 60.4599L18.37 56.2299C18.606 56.1588 18.8196 56.0279 18.99 55.8499L57.99 16.9099C59.0105 15.8692 59.578 14.4671 59.5687 13.0096C59.5593 11.5521 58.9738 10.1574 57.94 9.12989V9.12989ZM17.94 52.6699L10.36 45.0899L41 14.4399L48.59 21.9999L17.94 52.6699ZM8.94002 47.9199L15.1 54.0799L6.25002 56.7699L8.94002 47.9199ZM55.82 14.7799L50.71 19.8899L43.13 12.3199L48.24 7.20989C48.4723 6.97708 48.7481 6.79236 49.0519 6.66633C49.3556 6.5403 49.6812 6.47542 50.01 6.47542C50.3389 6.47542 50.6645 6.5403 50.9682 6.66633C51.2719 6.79236 51.5478 6.97708 51.78 7.20989L55.78 11.2099C56.02 11.44 56.2117 11.7156 56.3438 12.0207C56.476 12.3257 56.546 12.6541 56.5497 12.9865C56.5534 13.3189 56.4908 13.6488 56.3655 13.9567C56.2402 14.2646 56.0548 14.5445 55.82 14.7799Z"
						fill="black"
					></path>
					<path
						d="M60.0001 57.5198H25.4301C25.0322 57.5198 24.6507 57.6778 24.3694 57.9591C24.0881 58.2404 23.9301 58.622 23.9301 59.0198C23.9301 59.4176 24.0881 59.7991 24.3694 60.0804C24.6507 60.3617 25.0322 60.5198 25.4301 60.5198H60.0001C60.3979 60.5198 60.7794 60.3617 61.0607 60.0804C61.342 59.7991 61.5001 59.4176 61.5001 59.0198C61.5001 58.622 61.342 58.2404 61.0607 57.9591C60.7794 57.6778 60.3979 57.5198 60.0001 57.5198V57.5198Z"
						fill="black"
					></path>
				</svg>
			</div>
			<textarea
				class="text-md w-full max-w-md rounded-md border-b border-gray-300 bg-white p-3 italic text-slate-700 shadow hover:bg-gray-50"
				type="text"
				v-model.trim="contents"
			></textarea>
      </div>
			<div class="mt-2 ml-12 space-x-2">
				<input
					class="text-sm text-slate-600 underline hover:text-slate-800"
					type="submit"
					value="Modifier"
				/>
				<button class="text-sm text-slate-600 underline hover:text-slate-800" @click="handleClose">
					Annuler
				</button>
			</div>
		</form>
	</div>
	<div class="my-6 " v-else>
		<div class="my-auto flex gap-3">
			<div>
				<svg
					class="mt-2 h-8 w-8"
					width="64"
					height="64"
					viewBox="0 0 64 64"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M57.94 9.12989L53.94 5.12989C53.4293 4.6189 52.8228 4.21354 52.1554 3.93698C51.4879 3.66041 50.7725 3.51807 50.05 3.51807C49.3275 3.51807 48.6121 3.66041 47.9447 3.93698C47.2772 4.21354 46.6708 4.6189 46.16 5.12989L7.17002 43.9999C6.99825 44.1774 6.87139 44.3934 6.80002 44.6299L2.56002 58.5899C2.48301 58.8494 2.47767 59.125 2.54457 59.3873C2.61147 59.6496 2.74812 59.8889 2.94002 60.0799C3.07817 60.2206 3.2432 60.332 3.42531 60.4076C3.60741 60.4832 3.80286 60.5214 4.00002 60.5199C4.14871 60.5196 4.29668 60.4994 4.44002 60.4599L18.37 56.2299C18.606 56.1588 18.8196 56.0279 18.99 55.8499L57.99 16.9099C59.0105 15.8692 59.578 14.4671 59.5687 13.0096C59.5593 11.5521 58.9738 10.1574 57.94 9.12989V9.12989ZM17.94 52.6699L10.36 45.0899L41 14.4399L48.59 21.9999L17.94 52.6699ZM8.94002 47.9199L15.1 54.0799L6.25002 56.7699L8.94002 47.9199ZM55.82 14.7799L50.71 19.8899L43.13 12.3199L48.24 7.20989C48.4723 6.97708 48.7481 6.79236 49.0519 6.66633C49.3556 6.5403 49.6812 6.47542 50.01 6.47542C50.3389 6.47542 50.6645 6.5403 50.9682 6.66633C51.2719 6.79236 51.5478 6.97708 51.78 7.20989L55.78 11.2099C56.02 11.44 56.2117 11.7156 56.3438 12.0207C56.476 12.3257 56.546 12.6541 56.5497 12.9865C56.5534 13.3189 56.4908 13.6488 56.3655 13.9567C56.2402 14.2646 56.0548 14.5445 55.82 14.7799Z"
						fill="black"
					></path>
					<path
						d="M60.0001 57.5198H25.4301C25.0322 57.5198 24.6507 57.6778 24.3694 57.9591C24.0881 58.2404 23.9301 58.622 23.9301 59.0198C23.9301 59.4176 24.0881 59.7991 24.3694 60.0804C24.6507 60.3617 25.0322 60.5198 25.4301 60.5198H60.0001C60.3979 60.5198 60.7794 60.3617 61.0607 60.0804C61.342 59.7991 61.5001 59.4176 61.5001 59.0198C61.5001 58.622 61.342 58.2404 61.0607 57.9591C60.7794 57.6778 60.3979 57.5198 60.0001 57.5198V57.5198Z"
						fill="black"
					></path>
				</svg>
			</div>
			<p
				v-html="props.content"
				class="text-md w-full max-w-md rounded-md border-b border-gray-300 bg-white p-3 italic text-slate-700 shadow hover:bg-gray-50"
			></p>
		</div>
		<div class="ml-14 mt-2 flex gap-5">
			<div>
				<svg
					class="mt-1 opacity-60"
					xmlns="http://www.w3.org/2000/svg"
					width="15.498"
					height="15.498"
					viewBox="0 0 15.498 15.498"
				>
					<path
						id="face-smile-emoji"
						d="M7.749,8A7.749,7.749,0,1,0,15.5,15.749,7.748,7.748,0,0,0,7.749,8Zm0,14A6.249,6.249,0,1,1,14,15.749,6.256,6.256,0,0,1,7.749,22Zm-2.5-6.749a1,1,0,1,0-1-1A1,1,0,0,0,5.249,15.249Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,10.249,15.249Zm.125,2.268a3.413,3.413,0,0,1-5.249,0,.75.75,0,0,0-1.153.959,4.919,4.919,0,0,0,7.555,0,.75.75,0,0,0-1.153-.959Z"
						transform="translate(0 -8)"
					></path>
				</svg>
			</div>

			<li class="ml-2 text-slate-500">
				<button class="text-sm text-slate-600 underline hover:text-slate-800" @click="handleUp">
					Modifier
				</button>
			</li>
			<li class="text-slate-500">
				<button
					class="text-sm text-slate-600 underline hover:text-slate-800"
					@click="deleteComment(comment.id)"
				>
					Supprimer
				</button>
			</li>
		</div>
	</div>
</template>

