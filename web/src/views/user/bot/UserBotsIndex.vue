<template>
    <ContentField>我的bot</ContentField>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import $ from 'jquery'
import { useStore } from 'vuex'
export default {
    components: {
        ContentField
    },
    setup(){
        const store = useStore();
        // $.ajax({
        //     url: "http://localhost:3000/user/bot/add/",
        //     type: "post",
        //     data:{
        //         title: "bot的标题",
        //         description: "bot的描述",
        //         content: "bot的代码",
        //     },
        //     headers:{
        //         Authorization: "Bearer " + store.state.user.token
        //     },
        //     success(resp){
        //         console.log(resp);
        //     },
        //     error(resp){
        //         console.log(resp);
        //     }
        // });
        // $.ajax({
        //     url: "http://localhost:3000/user/bot/remove/",
        //     type: "post",
        //     data:{
        //         bot_id: 6,
        //     },
        //     headers:{
        //         Authorization: "Bearer " + store.state.user.token
        //     },
        //     success(resp){
        //         console.log(resp);
        //     },
        //     error(resp){
        //         console.log(resp);
        //     }
        // })

        // $.ajax({
        //     url: "http://localhost:3000/user/bot/update/",
        //     type: "post",
        //     data:{
        //         bot_id: 7,
        //         title: "更新bot的标题",
        //         description: "更新bot的描述",
        //         content: "更新bot的代码",
        //     },
        //     headers:{
        //         Authorization: "Bearer " + store.state.user.token
        //     },
        //     success(resp){
        //         console.log(resp);
        //     },
        //     error(resp){
        //         console.log(resp);
        //     }
        // })

        $.ajax({
            url: "http://localhost:3000/user/bot/getlist/",
            type: "get",
            data:{
                bot_id: 7,
                title: "更新bot的标题",
                description: "更新bot的描述",
                content: "更新bot的代码",
            },
            headers:{
                Authorization: "Bearer " + store.state.user.token
            },
            success(resp){
                console.log(resp);
            },
            error(resp){
                console.log(resp);
            }
        })
    }
}
</script>

<style scoped>

</style>