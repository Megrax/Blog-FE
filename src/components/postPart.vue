<template>
    <section class="body">
        <!-- 博文 -->
        <div class="title" v-bind:style="picStyle(post.ppic)">{{ post.ptitle }}</div>
        <article>
            <article v-html="post.pcontent">
            </article>
            <!-- 标签 -->
            <aside>
                <div class="tag" v-for="(tag,index) in tags" :key="index">#{{ tag.ttitle }}</div>
            </aside>
        </article>
        <div class="comment-submit">
            <!-- 提交评论 -->
            <form class="submit_wrapper">
                <div class=" information">
                    <input v-model="newComment.cperson" type="text" required placeholder="昵称/ID *必填" name="cperson" />
                    <input v-model="newComment.cemail" type="text" required placeholder="邮箱 *必填" name="cemail" />
                </div>
                <div class="comm">
                    <textarea v-model="newComment.ccontent" id="ccontent" name="ccontent" placeholder="看到这里了，留下一句评论吧！" required></textarea>
                </div>
                <input v-model="newComment.pid" type="hidden" name="pid" />
                <input type="submit" value="提交" class="submit" v-on:click.prevent="submit()" />
            </form>
            <!-- 展示评论 -->
            <div class="comments">
                <div class="a-comment" v-for="(comment,index) in comments" :key="index">
                    <h4 class="com-id">{{comment.cperson}}</h4>
                    <i class="com-date">{{comment.ccreated_at}}</i>
                    <p class="com-content">{{comment.ccontent}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";
import qs from "qs";
import moment from 'moment';

export default {
    data() {
        return {
            post: {},
            comments: [],
            tags: [],
            getURL: this.globalUrl + '/posts',
            newComment: {
                cperson: '',
                cemail: '',
                ccontent: '',
                pid: this.$route.params.pid
            }
        }
    },
    methods: {
        picStyle: function (img) {
            let imgURL = 'http://blog.megrax.space:1779/' + img;
            return {
                background: "url('" + imgURL + "') rgba(0, 0, 0, 0.3) center center / 100% no-repeat",
                backgroundBlendMode: "multiply",
            }
        },
        submit: function () {
            let now = moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss');

            let data = {
                pid: this.newComment.pid,
                cperson: this.newComment.cperson,
                ccontent: this.newComment.ccontent,
                cemail: this.newComment.cemail,
                ccreated_at: now
            };

            this.axios.post(this.globalUrl + "/posts/add_comment", qs.stringify(data));
        }
    },
    mounted() {
        this.getURL = this.getURL + '/' + this.$route.params.pid;
        axios.get(this.getURL).then(res => {
            this.post = res.data[0][0];
            this.comments = res.data[1];
            this.tags = res.data[2];
        });
    }
}
</script>

<style scoped>
@import url('../../assets/css/exampleArticle.css');

.body .title {
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 430px;
    color: snow;
    font-size: 40px;
}

.body article {
    width: 880px;
    margin: 0 auto;
    padding: 35px 10px;
    border-bottom: 3px dotted #ccc;
}

.body aside {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: 800px;
    min-height: 50px;
    margin: 50px auto;
}

.tag {
    display: inline-block;
    height: 22px;
    padding: 3px 8px;
    margin: 10px;
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

.body .comment-submit .submit_wrapper {
    position: relative;
    margin: 50px auto;
    width: 740px;
    height: 280px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

.comment-submit .information input {
    width: 332px;
    height: 57px;
    font-size: 17px;
    caret-color: #ccc;
    background-color: #fff;
    border-bottom: 3px dashed #ccc;
    padding: 3px;
}

.comment-submit .information input:focus {
    border-bottom: 3px dashed orange;
}

.comment-submit .information input:first-child {
    margin-left: 31px;
}

.comment-submit .comm textarea {
    display: block;
    margin-left: 31px;
    padding: 3px;
    resize: none;
    border-bottom: 3px dashed #ccc;
    background-color: #fff;
    caret-color: #ccc;
    width: 668px;
    height: 160px;
    font-size: 17px;
}

.comment-submit .comm textarea:focus {
    border-bottom: 3px dashed orange;
}

.comment-submit .submit {
    position: absolute;
    bottom: 5px;
    right: 38px;
    width: 72px;
    height: 36px;
    cursor: pointer;
    font-size: 17px;
}

.comments {
    margin-top: 20px;
    padding: 10px 0;
}

.a-comment {
    margin: 20px auto;
    width: 800px;
    padding: 20px 20px;
    background-color: #fff;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    transition: all, 0.5s;
}

.a-comment:hover {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
}

.a-comment .com-id {
    display: inline;
    font-size: 18px;
}

.a-comment .com-date {
    float: right;
    color: #bbb;
}

.a-comment .com-content {
    margin: 20px 20px;
    text-indent: 2em;
}
</style>