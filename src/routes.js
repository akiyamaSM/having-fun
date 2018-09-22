// the components
import HelloWorld from './components/HelloWorld.vue'
import User from './components/User.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Logout from './components/auth/Logout.vue'
import Secret from './components/Secret.vue'

// Set the routes
export const routes =[
	{ 
		path: '/',
		component: HelloWorld 
	},
	{ 
		path: '/user/:id', 
		component: User 
	},
	{ 
		path: '/login', 
		component: Login,
		meta: {
			guest : true
		}
	},
	{ 
		path: '/register', 
		component: Register,
		meta: {
			guest : true
		}
	},
	{ 
		path: '/secret',
		component: Secret,
		meta:{
			authenticated : true
		}
	},
	{ 
		path: '/logout',
		component: Logout,
		meta:{
			authenticated : true
		}
	}
]