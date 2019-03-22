<template>
    <div>
        Modules:
        <!-- A:{{ this.$store.state.moduleA.moduleACount }} -->
        <!-- A:{{ this.$store.getters["moduleA/getModuleACount"] }} -->
        A:{{ getterModuleACount }}
        B:{{ this.$store.state.moduleB.moduleBCount }}
        <!-- C:{{ this.$store.state.moduleC.moduleCCount }} -->
        <button @click="addHandler">ModuleA-ADD</button>
    </div>
</template>
<script>

import { mapGetters } from "vuex"

export default {
    name:"ModuleDemo",
    methods:{
        addHandler(){
            // this.$store.commit("moduleA/moduleAIncrement")
            this.$store.dispatch("moduleA/moduleAIncrementActions")
        }
    },
    computed: {
        ...mapGetters({
            getterModuleACount:"moduleA/getModuleACount"
        })
    },
}
</script>
<style scoped>

</style>
