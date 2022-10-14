<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Navbar from '@/components/Navbar.vue';
</script>
<script lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
// import { Component, Vue, Watch } from "vue-property-decorator";
// import HeaderBar from '@/components/HeaderBar.vue';
// import Footer from '@/components/Footer.vue';

// @Component({
//     components: {
//         Navbar,
//         HeaderBar,
//         Footer
//         // Sidebar,
//         // AppMain
//     }
// })
export default {
    setup() {
        let trans = ref(false);
        let routeName = ref('');
        const route = useRoute();
        if (route.name) {
            routeName = route.name;
        }

        watch(route, (val, oldVal) => {
            routeName = val.name;
            trans = !trans;
        })

        return {
            trans,
            routeName,
            route,
            Navbar
        }
    }
}
</script>

<template lang="pug">
.app-wrapper
    Navbar
    router-view(v-slot="{ Component }")
        transition(
            name="fade-transform"
            mode="out-in"
        )
            component(:is="Component")
    //- Footer
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    // min-width: 1100px;
    &.mobile.openSidebar {
        position: fixed;
        top: 0;
    }
}
</style>
