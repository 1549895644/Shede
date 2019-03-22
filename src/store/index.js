import Vue from "vue"
import 'es6-promise/auto'
import Vuex from "vuex"
import defaultState from "./defaultState"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

import moduleA from "./modules/moduleA"
import moduleB from "./modules/moduleB"

// 日志插件
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)
// 创建vuex
export default function () {
    const store = new Vuex.Store({
        strict: process.env.NODE_ENV !== 'production', // 严格模式
        state: defaultState,
        // Mutation 必须是同步函数
        mutations: mutations,
        // 异步操作
        actions: actions,
        getters:getters,
        // plugins:[createLogger()],
        plugins:[
            (state) => {
                console.log(state);
            }
        ],
        // 子模块
        modules:{
            moduleA:moduleA,
            moduleB:moduleB
        }
    })

    // 热重载
    if(module.hot){
        // 使 action mutation getters state成为可热重载模块
        module.hot.accept([
            "./defaultState",
            "./mutations",
            "./actions",
            "./getters"
        ],() => {
            // 获取更新后的模块
            // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
            const newState = require('./defaultState').default
            const newMutations = require('./mutations').default
            const newActions = require('./actions').default
            const newGetters = require('./getters').default

            // 加载新模块
            store.hotUpdate({
                state:newState,
                mutations:newMutations,
                actions:newActions,
                getters:newGetters
            })
        })
    }

    return store;
}
