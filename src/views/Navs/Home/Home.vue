<script lang="ts">
// @ is an alias to /src
import { getAllPhoto, getStream } from '@/api';
// import Justified from "@/components/Justified.vue";
import { ref, reactive, toRefs, toRef, onMounted, onBeforeMount } from 'vue';

// @Component({
//     components: {
//         Justified
//     }
// })
export default {
    setup() {
        let datas = reactive({
            allData: {},
            imgData: [],
            // streamData: ''
        });

        let streamData = ref('');

        const getAllPhotoGo = async() => {
            const { data } = await getAllPhoto({
                page: 1,
                extras: "o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o, owner_name, date_taken, views",
                in_gallery: 1,
                format: "json",
                nojsoncallback: 1,
                media: "photos",
                per_page: 100,
            });
            if (data) {
                datas.allData = data;
                data.photos.photo.forEach((item: any) => {
                    datas.imgData.push({
                        id: item.id,
                        src: item.url_o,
                        width: item.width_s,
                        height: item.height_s,
                    });
                });
            }
        }

        const getStreamGo = async () => {
            const { data } = await getStream({
                format: 'json',
                nojsoncallback: 1,
                photo_id: 51085366482,
                secret: "e41c671299",
            });

            if (data) {
                console.log('streamdata', data);
                streamData.value = data.streams.stream[0]._content;
            }
        }
        getAllPhotoGo();
        getStreamGo();
        // onMounted(() => {
            // getAllPhotoGo();
            // getStreamGo();
        // });

        return {
            getAllPhotoGo,
            getStreamGo,
            datas,
            streamData
        }
    }
    // protected allData = {};
    // protected imgData: any = [];
    // protected streamData: any = "";

    // protected created() {
    //     this.getStreamGo();
    //     this.getAllPhotoGo();
    // }

    // protected async getAllPhotoGo(): Promise<void> {
    //     const { data } = await getAllPhoto({
    //         page: 1,
    //         extras: "o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o, owner_name, date_taken, views",
    //         in_gallery: 1,
    //         format: "json",
    //         nojsoncallback: 1,
    //         media: "photos",
    //         per_page: 100,
    //     });
    //     if (data) {
    //         this.allData = data;
    //         data.photos.photo.forEach((item: any) => {
    //             this.imgData.push({
    //                 id: item.id,
    //                 src: item.url_o,
    //                 width: item.width_s,
    //                 height: item.height_s,
    //             });
    //         });
    //         // loading.close();
    //     }
    // }

    // protected async getStreamGo(): Promise<void> {
    //     const { data } = await getStream({
    //         format: "json",
    //         nojsoncallback: 1,
    //         photo_id: 51085366482,
    //         secret: "e41c671299",
    //     });
    //     if (data) {
    //         /* eslint no-underscore-dangle: 0 */
    //         this.streamData = data.streams.stream[0]._content;
    //     }
    // }
}
</script>

<template lang="pug">
div.home
    video.video-style(
        v-if="streamData"
        autoplay
        muted
        loop
        playsinline
    )
        source(
            :src="streamData"
            type="video/mp4"
        )
    //- Justified(:imgData="imgData")
</template>

<style scoped lang="scss">
.home:deep() {
    width: 100%;
    // max-height: 675px;
    // height: 200px;
    // overflow: hidden;
    .video-style {
        width: 100%;
        height: 100%;
    }
}
</style>
