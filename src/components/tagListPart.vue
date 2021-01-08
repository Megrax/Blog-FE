<template>
    <section>
        <div class="tag-wrapper">
            <div class="des">共有{{ Object.keys(tags).length }}个标签</div>
            <div class="tag-area">
                <div class="tag" v-for="(tag,index) in tags" :key="index">#{{ tag.ttitle }}</div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios"

export default {
    data() {
        return {
            tags: {}
        }
    },
    mounted() {
        axios.get(this.globalUrl + '/tags').then(res => (this.tags = res.data));
    }
}
</script>

<style scoped>
section {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 72vh;
}

section .tag-wrapper {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
    width: 60vw;
    height: 60vh;
}

section .tag-wrapper .des {
    font-size: 25px;
}

section .tag-wrapper .tag-area {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 50vh;
    border-top: 2px dashed #4f4b4d;
}

.tag {
    display: inline-block;
    height: 22px;
    padding: 3px 8px;
    margin: 5px 10px;
    border: 1px solid #0353a4;
    border-radius: 10px;
    background-color: #fefcfd;
    color: #0353a4;
    font-size: 14px;
}

.tag:hover {
    border: 1px solid orange;
    color: orange;
    cursor: pointer;
}
</style>