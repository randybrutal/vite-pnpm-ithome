<script lang="ts">
// @ is an alias to /src
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
    setup() {
        let active = ref('Home');
        const route = useRoute();
        active = route.meta.upStair

        watch(route, (val, oldVal) => {
            active = val.meta.upStair;
        })

        return {
            active,
            route
        }
    }
    // protected active = "Home";

    // protected created() {
    //     this.active = this.$route.meta.upStair;
    // }

    // @Watch("$route")
    // protected routeChange(val: any) {
    //     this.active = val.meta.upStair;
    // }
}
</script>

<template lang="pug">
div.navbar
    vs-navbar(
        v-model="active"
        class="nabarx"
    )
        template(#left)
            img(
                src="../assets/logo.png"
                alt=""
                width="100"
            )
        vs-navbar-item(
            :active="active == 'Home'"
            id="Home"
        )
            router-link.router-link-style(
                to="/Home"
            ) Home
        vs-navbar-item(
            :active="active == 'Gallery'"
            id="Gallery"
        )
            router-link.router-link-style(
                to="/Gallery"
            ) Gallery
</template>

<style scoped lang="scss">
.navbar:deep(){
    position: relative;
    height: 90px;
    margin-bottom: 20px;
    // box-shadow: -1px 1px 10px 1px #242424;
    // -webkit-box-shadow: -1px 1px 10px 1px #242424;
    // -moz-box-shadow: -1px 1px 10px 1px #242424;
    // -o-box-shadow: -1px 1px 10px 1px #242424;
    .logo {
        float: left;
    }
    .vs-navbar {
        // margin-top: 48px;
        color: #fff;
        .vs-navbar__center {
            margin-top: 45px;
            margin-right: 100px;
        }
    }
    .vs-navbar-content {
        border-radius: 0;
        background-color: transparent;
    }
    .router-link-style {
        display: block;
        width: 80px;
        line-height: 44px;
    }
    .vs-navbar__item {
        padding: 0;
    }
    .vs-navbar--item {
        color: $yellow !important;
    }
}
</style>
