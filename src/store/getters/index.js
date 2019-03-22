export default {
    getCounter(state){
        return state.count > 0 ? state.count : '不合理'
    }
}