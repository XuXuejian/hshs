import About from './pages/about/About'
import Login from './pages/login/Login'
import Home from './pages/home/Home'

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  }, {
    path: '/login',
    component: Login
  }, {
    path: '/about',
    component: About,
    // routes: [
    //   {
    //     path: '/child/:id/grand-child',
    //     component: GrandChild
    //   }
    // ]
  }
]