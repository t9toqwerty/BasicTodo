import Vue from 'vue'
import App from './App.vue'
import UUID from "vue-uuid";
import underscore from 'vue-underscore';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(UUID);
Vue.use(underscore)
Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        tasks: []
    },
    getters: {
        getAllTasks: state => {
            return state.tasks;
        }
    },
    mutations: {
        addNewTask(state, task) {
            state.tasks.push(task);
        },
        markAsDone(state, taskId) {
            for (let i in state.tasks) {
                if (state.tasks[i].id === taskId) {
                    state.tasks[i].completed = true;
                }
            }
        },
        deleteTask(state, taskId) {
            for (let i in state.tasks) {
                if (state.tasks[i].id === taskId) {
                    state.tasks.splice(i, 1);
                }
            }
        }
    }
})

/* eslint-disable no-new */
new Vue({
    store,
    el: '#app',
    render: h => h(App)
})
