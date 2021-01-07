<template>
    <section class="body">
        <!-- 博文 -->
        <div class="title">{{ post.ptitle }}</div>
        <article>
            <article v-html="post.pcontent">
            </article>
            <!-- 标签 -->
            <aside>
                <div class="tag" v-for="(tag,index) in post.ttitle" :key="index">#{{ tag }}</div>
            </aside>
        </article>
        <div class="comment-submit">
            <!-- 提交评论 -->
            <form action="/posts/add_comment" class="submit_wrapper" method="POST">
                <div class="information">
                    <input type="text" required="required" placeholder="昵称/ID *必填" name="cperson" />
                    <input type="text" required="required" placeholder="邮箱 *必填" name="cemail" />
                </div>
                <div class="comm">
                    <textarea id="ccontent" name="ccontent" placeholder="看到这里了，留下一句评论吧！" required="required"></textarea>
                </div>
                <input type="hidden" name="pid" value="<%= post_info[0].pid %>" />
                <input type="submit" value="提交" class="submit" />
            </form>
            <!-- 展示评论 -->
            <div class="comments">
                <div class="a-comment">
                    <h4 class="com-id">Name</h4>
                    <i class="com-date">2021.1.1</i>
                    <p class="com-content">Content.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            post: {
                ptitle: '第一篇博文',
                pcontent: `<div class="bodywrapper">
                <div class="example-title">
                    <h1>文字排版</h1>
                </div>
                <h1>h1.Simple default styles for headings</h1>
                <h2 class="h2">h2.Simple default styles for headings</h2>
                <h3>h3.Simple default styles for headings</h3>
                <h4>h4.Simple default styles for headings</h4>
                <h5>h5.Simple default styles for headings</h5>
                <h6>h6.Simple default styles for headings</h6>
                <hr />
                <h2>2.提示框</h2>
                <div class="alert_box" id="first">
                    A simple primary alert - check it out!
                </div>
                <div class="alert_box" id="second">
                    A simple secondary alert - check it out!
                </div>
                <div class="alert_box" id="third">
                    A simple success alert - check it out!
                </div>
                <div class="alert_box" id="forth">
                    A simple danger alert - check it out!
                </div>
                <div class="alert_box" id="fifth">
                    A simple warning alert - check it out!
                </div>
                <div class="alert_box" id="sixth">
                    A simple info alert - check it out!
                </div>
                <div class="alert_box" id="seventh">
                    A simple dark alert - check it out!
                </div>
                <h2>3.按钮样式</h2>
                <div class="upper">
                    <button class="primary">Primary</button>
                    <button class="secondary">Secondary</button>
                    <button class="success">Success</button>
                    <button class="danger">Danger</button>
                    <button class="warning">Warning</button>
                    <button class="info">Info</button>
                    <button class="light">Light</button>
                    <button class="dark">Dark</button>
                </div>
                <br />
                <button class="primary">Primary</button>
                <button class="secondary">Secondary</button>
                <button class="success">Success</button>
                <button class="danger">Danger</button>
                <button class="warning">Warning</button>
                <button class="info">Info</button>
                <button class="light">Light</button>
                <button class="dark">Dark</button>
                <h2>4.文字</h2>
                <p>
                    I use a lot of tools to help me create WordPress, Ghost
                    and Jekyll themes. Tools will range from development,
                    design, services, hosting and automation.
                </p>
                <ul>
                    <li>
                        Ut at interdum nunc. Maecenas commodo turpis quis
                        elementum gravida.
                    </li>
                    <li>
                        Nunc ac sapien tellus. Quisque risus enim, tempus
                        eget porttitor.
                    </li>
                    <li>
                        Donec nibh massa, rutrum a sollicitudin eu, lacinia
                        in lorem.
                    </li>
                </ul>
                <p>
                    Graphic design is the paradise of individuality,
                    eccentricity, heresy,
                </p>
                <ol>
                    <li>
                        Ut at interdum nunc. Maecenas commodo turpis quis
                        elementum gravida.
                    </li>
                    <li>
                        Nunc ac sapien tellus. Quisque risus enim, tempus
                        eget porttitor.
                    </li>
                    <li>
                        Donec nibh massa, rutrum a sollicitudin eu, lacinia
                        in lorem.
                    </li>
                </ol>
                <p>
                    I use a lot of tools to help me create WordPress, Ghost
                    and Jekyll themes. Tools will range from development,
                    design, services, hosting and automation.
                </p>
                <p>
                    Graphic design is the paradise of individuality,
                    eccentricity, heresy, abnormality, hobbies, and humors.
                    — George Santayana.
                </p>
                <hr />
                <p>
                    Graphic design is the paradise of individuality,
                    eccentricity, heresy, abnormality, hobbies, and humors.
                    — George Santayana. I use a lot of tools to help me
                    create WordPress, Ghost and Jekyll themes. Tools will
                    range from development, design, services, hosting and
                    automation.
                </p>
                <h2>5.其它</h2>
                <p>
                    You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                    <del>This line of text is meant to be treated as deleted
                        text.</del>
                </p>
                <p><u>This line fo text will render as underlined.</u></p>
                <p>
                    <small>This line of text is meant to be treated as fine
                        print.</small>
                </p>
                <p><b>This line rendered as bold text.</b></p>
                <p><i>This line rendered as italicized text.</i></p>
            </div>`,
                ttitle: [
                    'blog',
                    'blog',
                    'blog'
                ]
            }
        }
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
    background: url(../../assets/img/dis-1.jpg) rgba(0, 0, 0, 0.3) no-repeat
        center;
    background-blend-mode: multiply;
    background-size: cover;
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
    /* background-color: red; */
}

.a-comment {
    margin: 20px auto;
    width: 800px;
    /* height: 220px; */
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