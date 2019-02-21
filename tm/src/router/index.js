import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import TeacherList from '@/components/teacher/list'
import TeacherAdd from '@/components/teacher/add'
import TeacherEdit from '@/components/teacher/edit'
import Register from '@/components/Register'
import store from "../store"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/home',
            name: 'index'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/teacher/list',
            name: 'teacherList',
            component: TeacherList,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/teacher/add',
            name: 'teacherAdd',
            component: TeacherAdd,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/teacher/edit',
            name: 'TeacherEdit',
            component: TeacherEdit,
            meta: {
                requiresAuth: true
            }
        },

    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.logged) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
})

export default router;