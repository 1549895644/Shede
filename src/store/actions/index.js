import { INCREMENT, DECREMENT } from "../mutations/mutation-types"

export default {
    incrementActions({ commit }, n) {
        setTimeout(() => {
            commit(INCREMENT, n)
        })
    },
    actionA({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit("mA")
                resolve()
            }, 0)
        })
    },
    decrementActions(context, n) {
        fetch("http://iwenwiki.com/sxtstu/blueberrypai/getChengpinDetails.php")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                context.commit(DECREMENT, n)
            })
    }
}