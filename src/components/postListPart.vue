<template>
    <section class="body">
        <div class="post" id="post1" v-for="(post,index) in posts" :key="index" v-bind:style="picStyle(post.ppic)">
            <router-link to="/blog/post">{{post.ptitle}}</router-link>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            posts: [
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                },
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                },
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                },
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                },
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                },
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                },
                {
                    ptitle: '第一篇博文',
                    ppic: 'dis-1.jpg'
                }
            ]
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
        }
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

.body #post1 {
    background: url(../../assets/img/dis-1.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post2 {
    background: url(../../assets/img/dis-2.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post3 {
    background: url(../../assets/img/dis-3.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post4 {
    background: url(../../assets/img/dis-4.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post5 {
    background: url(../../assets/img/dis-5.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post6 {
    background: url(../../assets/img/dis-6.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post7 {
    background: url(../../assets/img/dis-7.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}
</style>