<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <!-- {{ getCount }}-{{ getNum }} -->
    <!-- {{ count }}-{{ num }} -->
    <!-- {{ this.$store.state.count = 5000 }} -->
    <p>{{ getCounter }}</p>
    <div>
      <button @click="addHandler">增加</button>
      <button @click="minHandler">减少</button>
    </div>
    <hr>
    <ModuleDemo/>

    <input type="text" v-model="message">
    <p>{{ this.$store.state.message }}</p>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { INCREMENT, DECREMENT } from "./store/mutations/mutation-types.js";
import ModuleDemo from "./components/ModuleDemo";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    HelloWorld,
    ModuleDemo
  },
  mounted() {
    console.log(this.IWEN);
  },
  // computed: {
  //   getCount(){
  //     return this.$store.state.count
  //   }
  // },

  // computed: mapState({
  //   getCount:state => state.count,
  //   getNum:state => state.num
  // })

  computed: {
    message: {
      get() {
        return this.$store.state.message;
      },
      set(value) {
        this.$store.commit("updateMessage", value);
      }
    },

    getHello() {},
    ...mapState(["count", "num"]),

    // getCount(){
    //   return this.$store.getters.getCounter;
    // }
    ...mapGetters(["getCounter"])
  },
  methods: {
    // addHandler(){
    //   // this.$store.commit("increment",{
    //   //   n:10
    //   // })
    //   this.$store.commit({
    //     type:INCREMENT,
    //     n:10
    //   })
    // },
    // minHandler(){
    //   this.$store.commit(DECREMENT,5)
    // }

    // ...mapMutations([INCREMENT,DECREMENT]),
    // addHandler(){
    //   this.INCREMENT({n:1000})
    // },
    // minHandler(){
    //   this.DECREMENT(15)
    // }

    // addHandler(){
    //   this.$store.dispatch("incrementActions",{n:20})
    // },
    // minHandler(){
    //   this.$store.dispatch("decrementActions",10)
    // }

    ...mapActions(["incrementActions", "decrementActions", "actionA"]),
    addHandler() {
      this.incrementActions({ n: 20 });
    },
    minHandler() {
      // this.decrementActions(30)
      this.actionA().then(() => {
        this.decrementActions(30);
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
