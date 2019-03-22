export default {
    namespaced: true,
    state:{
        // 子模块状态
        moduleACount:10
    },
    mutations:{
        moduleAIncrement(state){
            state.moduleACount+=1
        }
    },
    actions:{
        moduleAIncrementActions({state, commit, rootState}){
            // console.log(state);
            commit("moduleAIncrement")
            console.log(rootState);
        }
    },
    getters:{
        getModuleACount(state, getters, rootState){
            return state.moduleACount
        }
    }
}