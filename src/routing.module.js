import Vue from 'vue'
import VueRouter from 'vue-router'
import employeeDetail from './components/employee-detail'


Vue.use(VueRouter);

const routes = [
    {path: '/detail/:id', component: employeeDetail}
]

export const router = new VueRouter({
    mode: 'history',
    routes: routes
});

