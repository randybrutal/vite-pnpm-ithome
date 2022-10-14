<script lang="ts">
import { ref } from "vue";

export default {
    props: {
        msg: String,
    },
    setup() {
        const count = ref(0);
        const goal = +new Date("2022-09-03 12:00:00");
        const date = +new Date();
        const day = ref(0);
        const hour = ref(0);
        const minute = ref(0);
        const second = ref(0);
        const times = goal - date;
        console.log("date", new Date(), +new Date());
        const add = () => {
            count.value ++;
        }

        // const ticker = () {
        //     setInterval(() => {
        //         times = times - 1;
        //     }, 1000);
        // }

        return {
            count,
            goal,
            day,
            times,
            add,
            // ticker
        };
    },
};
</script>

<template lang="pug">
.card
    button(type="button" @click="add") count is {{ count }}
    div {{ day }}
    div {{ goal }}
    div {{ times }}
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
