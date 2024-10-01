import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BoardView from "../views/BoardView.vue"
import UpdateComponent from "../components/UpdateComment.vue"


const router = new createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		// 	path: "/",
		// 	name: "home",
		// 	component: HomeView,
		// },
		{
			path: "/",
			name: "home",
			component: BoardView,
		},
		{
			path: "/modal",
			name: "UpdateComponent",
			component: UpdateComponent,
		},
	],
});

export default router;
