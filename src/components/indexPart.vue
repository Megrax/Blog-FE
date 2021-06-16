<template>
  <div>
    <section class="head-pic" id="head-pic"></section>
    <section>
      <div class="body-wrapper">
        <div class="message-box icon-bullhorn">
          &nbsp;<em>好好学习，天天向上</em>
        </div>
        <div class="sticky-article">
          <h2 class="icon-clubs">Sticky Article</h2>
          <div class="content">
            <div class="sticky" id="sticky-pic-first"></div>
            <div class="sticky" id="sticky-pic-second"></div>
            <div class="sticky" id="sticky-pic-third"></div>
          </div>
        </div>
        <div class="discovery">
          <h2 class="icon-leaf">Discovery</h2>
          <div class="content">
            <div
              class="discovery-post"
              v-for="(post, index) in posts"
              :key="index"
            >
              <div class="pic" v-bind:style="picStyle(post.ppic)"></div>
              <div class="des">
                <div class="time icon-calendar">{{ post.pcreated_at }}</div>
                <div class="title">
                  <router-link v-bind:to="pidTarget(post.pid)">
                    <h2>{{ post.ptitle }}</h2>
                  </router-link>
                </div>
                <div class="tag-area">
                  <div
                    class="tag"
                    v-for="(tag, index) in post.ttitle"
                    :key="index"
                  >
                    {{ tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

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
        // background: "url('" + imgURL + "') no-repeat center",
        background: "url('https://images.unsplash.com/photo-1601690893510-097a654804c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80') no-repeat center",
        backgroundSize: "100% 100%"
      }
    },
    pidTarget: function (pid) {
      let pidURL = '/blog/posts/' + pid;
      return pidURL;
    }
  },
  mounted() {
    axios.get(this.globalUrl + '/index').then(response => (this.posts = response.data));
  }
}
</script>

<style scoped>
section {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}

.body-wrapper {
  width: 802px;
  height: 100%;
  padding-top: 50px;
}

.message-box {
  width: 100%;
  height: 50px;
  border: 1px dashed #e6e6e6;
  border-radius: 10px;
  line-height: 50px;
  color: #aaa;
  padding: 7px 30px;
}

.sticky-article {
  width: 100%;
  height: 225px;
  margin-top: 30px;
  margin-bottom: 55px;
}

.sticky-article .content,
.discovery .content {
  border-top: 1px dashed #e6e6e6;
  padding-top: 15px;
  margin-top: 7px;
}

.sticky-article .content {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.sticky {
  width: 255px;
  height: 160px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.5s;
}

#sticky-pic-first {
  position: relative;
  background: url('../../assets/img/first.jpg') no-repeat center;
  background-size: 100% 100%;
  transition: 1s ease-in-out;
}

#sticky-pic-second {
  position: relative;
  background: url('../../assets/img/second.jpg') no-repeat center;
  background-size: 100% 100%;
  transition: 1s ease-in-out;
}

#sticky-pic-third {
  position: relative;
  background: url('../../assets/img/third.jpg') no-repeat center;
  background-size: 100% 100%;
  transition: 1s ease-in-out;
}

.sticky:hover {
  background-size: 110% 110% !important;
}

#sticky-pic-first::before {
  content: '第一篇文章';
  color: #fff;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  text-align: center;
  line-height: 160px;
  font-size: 20px;
}

#sticky-pic-first:hover::before {
  display: block;
}

#sticky-pic-second::before {
  content: '第二篇文章';
  color: #fff;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  text-align: center;
  line-height: 160px;
  font-size: 20px;
}

#sticky-pic-second:hover::before {
  display: block;
}

#sticky-pic-third::before {
  content: '第三篇文章';
  color: #fff;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  text-align: center;
  line-height: 160px;
  font-size: 20px;
}

#sticky-pic-third:hover::before {
  display: block;
}

.discovery .content {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
}

.discovery-post {
  width: 800px;
  height: 300px;
  background-color: #fff;
  margin-bottom: 40px;
  border-radius: 15px;
  box-shadow: 0px 1px 12px -6px;
  transition: all 1s;
}

.discovery-post:hover {
  box-shadow: 0px 1px 20px -6px;
}

.discovery-post:nth-child(2n + 1) .pic {
  float: left;
  width: 438px;
  height: 100%;
  border-radius: 15px 0 0 15px;
  transition: 0.5s ease-in-out;
}

.discovery-post:nth-child(2n + 1) .des {
  position: relative;
  float: right;
  width: 362px;
  height: 100%;
  background-color: #fff;
  border-radius: 0 15px 15px 0;
}

.discovery-post:nth-child(2n + 1) .des .time {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 20%;
  width: 100%;
  color: #4f4b4d;
  border-top: 2px solid #4f4b4d;
  border-right: 1px solid #4f4b4d;
  border-bottom: 2px solid #4f4b4d;
  border-radius: 0 15px 0 0;
  background-color: rgba(160, 160, 160, 0.119);
}

.discovery-post:nth-child(2n + 1) .des .title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  padding: 0 50px;
}

.discovery-post:nth-child(2n + 1) .des .tag-area {
  height: 40%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
}

.discovery-post:nth-child(2n) .pic {
  float: right;
  width: 438px;
  height: 100%;
  border-radius: 0 15px 15px 0;
  transition: 0.5s ease-in-out;
}

.discovery-post:nth-child(2n) .des {
  float: left;
  width: 362px;
  height: 100%;
  background-color: #fff;
  border-radius: 15px 0 0 15px;
}

.discovery-post:nth-child(2n) .des .time {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 20%;
  width: 100%;
  color: #4f4b4d;
  border-top: 2px solid #4f4b4d;
  border-left: 1px solid #4f4b4d;
  border-bottom: 2px solid #4f4b4d;
  border-radius: 15px 0 0 0;
  background-color: rgba(160, 160, 160, 0.119);
}

.discovery-post:nth-child(2n) .des .title {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  height: 40%;
  padding: 0 50px;
}

.discovery-post:nth-child(2n) .des .tag-area {
  height: 40%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 10px;
}

.tag {
  display: inline-block;
  height: 22px;
  padding: 3px 8px;
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

.discovery-post:hover .pic {
  background-size: 115% 115% !important;
}

.discovery .discovery-post .des h2 {
  font-size: 22px;
  font-weight: 600;
  color: #101012;
}

.discovery-post h2:hover {
  color: #518cd3 !important;
}
</style>