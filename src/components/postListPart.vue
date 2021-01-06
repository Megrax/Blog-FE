<template>
    <section class="body">
        <div class="post" id="post1">
            <a href="#">第一篇博文</a>
        </div>
        <div class="post" id="post2">
            <router-link to="/blog/post">第二篇博文</router-link>
        </div>
        <div class="post" id="post3"><a href="#">第三篇博文</a></div>
        <div class="post" id="post4"><a href="#">第四篇博文</a></div>
        <div class="post" id="post5"><a href="#">第五篇博文</a></div>
        <div class="post" id="post6"><a href="#">第六篇博文</a></div>
        <div class="post" id="post7"><a href="#">第七篇博文</a></div>
    </section>
</template>

<script>
export default {

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
    background-size: 120%;
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

.body #post1:hover {
    background-size: 120%;
}

.body #post2 {
    background: url(../../assets/img/dis-2.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post2:hover {
    background-size: 120%;
}

.body #post3 {
    background: url(../../assets/img/dis-3.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post3:hover {
    background-size: 120%;
}

.body #post4 {
    background: url(../../assets/img/dis-4.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post4:hover {
    background-size: 120%;
}
.body #post5 {
    background: url(../../assets/img/dis-5.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post5:hover {
    background-size: 120%;
}

.body #post6 {
    background: url(../../assets/img/dis-6.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post6:hover {
    background-size: 120%;
}

.body #post7 {
    background: url(../../assets/img/dis-7.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: 100%;
}

.body #post7:hover {
    background-size: 120%;
}
</style>