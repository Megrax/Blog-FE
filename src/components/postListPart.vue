<template>
    <section class="body">
        <div class="post" id="post1" v-for="(post,index) in posts" :key="index" v-bind:style="picStyle(post.ppic)">
            <router-link v-bind:to="pidTarget(post.pid)">{{post.ptitle}}</router-link>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            posts: {}
        }
    },
    methods: {
        picStyle: function (img) {
            let imgURL = 'http://blog.megrax.space:1779/' + img;
            return {
                background: "url('" + imgURL + "') rgba(0, 0, 0, 0.3) no-repeat center",
                backgroundBlendMode: "multiply",
                backgroundSize: "100%"
            }
        },
        pidTarget: function (pid) {
            let pidURL = '/blog/posts/' + pid;
            return pidURL;
        }
    },
    mounted() {
        axios.get(this.globalUrl + '/posts').then(res => (this.posts = res.data));
    }
}
</script>

<style scoped>
.body {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 69vh;
}

.body .post {
    width: 60vw;
    height: 200px;
    margin-top: 70px;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: background-size 1s ease-in-out;
}

.body .post:hover {
    background-size: 120% !important;
}

.body .post a {
    color: snow;
    font-size: 30px;
}

.body .post a:hover {
    text-decoration: underline;
}
</style>