import { createWebHistory, createRouter } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import List from '../views/List.vue';
import Hotel from '../views/Hotel.vue'


const routes = [

	{
		path: '/:pathMatch(.*)*',
		redirect: '/'
	},

	{
		path: '/',
		name: 'Dashboard',
		component: Dashboard,
	},

	{
		path: '/list',
		name: 'List',
		component: List,
	},

	{
		path: '/hotel/:id',
		name: 'Hotel',
		component: Hotel,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
