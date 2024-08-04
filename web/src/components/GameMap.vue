<template>
    <div ref="parent" class="gamemap">
        <canvas ref="canvas" tabindex="0"></canvas>
    </div>
</template>

<script>
import { GameMap } from "../assets/scripts/GameMap";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
export default {
    setup() {
        const store = useStore();
        const parent = ref(null);
        let canvas = ref(null);
        // 创建页面时执行该函数
        onMounted(() => {
            // 创建游戏地图，将画布与地图dom传入地图对象
            store.commit(
                "updateGameObject",
                new GameMap(canvas.value.getContext('2d'), parent.value,store)
            )
        });

        return { 
            parent,
            canvas,
        }
    }
}
</script>

<style scoped>

div.gamemap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}
</style>