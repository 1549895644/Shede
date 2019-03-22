1.VueX
    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能

    1.安装
        npm install vuex --save
    2.引用
        import Vuex from 'vuex'
        Vue.use(Vuex)
    3.兼容IE
        npm install es6-promise --save
        import 'es6-promise/auto'
    4.全局对象
        Vue.prototype.HOST  = "/api"
    5.创建store仓库
        const store = Vuex.Store({
            state:{
                num:100
            }
        })
        new Vue({
            el: '#app',
            store, // 注入
            components: { App },
            template: '<App/>'
        })
    6.state
        读取：this.$store.state.count
        mapState 辅助函数
    7.mutations
        mutations:{
            increment(state){
                state.count++
            },
            decrement(state){
                state.count--
            }
        }
        methods:{
            addHandler(){
                this.$store.commit("increment")
            },
            minHandler(){
                this.$store.commit("decrement")
            }
        }
        提交载荷(参数)
        对象风格的提交方式
        Mutation 需遵守 Vue 的响应规则
            1.最好提前在你的 store 中初始化好所有所需属性。
            2.当需要在对象上添加新属性时，你应该
        Mutation 必须是同步函数
        在组件中提交 Mutation
            ...mapMutations([INCREMENT,DECREMENT]),
            addHandler(){
                this.INCREMENT({n:1000})
            },
            minHandler(){
                this.DECREMENT(15)
            }
    8.actions
        Action 提交的是 mutation，而不是直接变更状态。
        Action 可以包含任意异步操作
        actions:{
            incrementActions(context,n){
                context.commit(INCREMENT,n)
            },
            decrementActions(context,n){
                context.commit(DECREMENT,n)
            }
        }

        actionA({ commit }){
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                commit("mA")
                resolve()
                },3000)
            })
        },
        decrementActions(context,n){
            fetch("http://iwenwiki.com/sxtstu/blueberrypai/getChengpinDetails.php")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                context.commit(DECREMENT,n)
            })
        }
    9.Getter
        对state状态做进一步的过滤
        getCounter(state){
            return state.count > 0 ? state.count : '不合理'
        }
        getCount(){
            return this.$store.getters.getCounter;
        }
    10.module
        每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
        命名空间!
            模块内部的 action、mutation 和 getter 是注册在全局命名空间的这样使得多个模块能够对同一 mutation 或 action 作出响应。
            namespaced: true
        模块动态注册
    11.插件
    12.严格模式
        strict: true
    13.热重载