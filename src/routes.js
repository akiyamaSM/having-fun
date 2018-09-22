// the components
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'

// Set the routes
export const routes =[
	{ path: '/', component: HelloWorld },
	{ path: '/user/:id', component: User },
	{ path: '/login', component: Login},
	{ path: '/register', component: Register}
]