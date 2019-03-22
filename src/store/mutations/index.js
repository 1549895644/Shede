import { INCREMENT, DECREMENT } from "./mutation-types"
export default {
    [INCREMENT](state, n) {
        state.count += n.n
    },
    [DECREMENT](state, n) {
        state.count -= n
    },
    mA(state) {
        state.num += 1
    },
    updateMessage(state,msg){
        state.message = msg;
    }
}