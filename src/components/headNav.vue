<template>
    <header>
        <div class="top-nav">
            <h1>Megrax's Blog</h1>
            <nav>
                <div class="list-wrapper">
                    <ul>
                        <router-link to="/blog/index">
                            <li class="icon-home2">首页</li>
                        </router-link>
                        <router-link to="#">
                            <li class="icon-pacman lists">
                                <span>列表</span>
                                <div class="dropdown-content">
                                    <router-link to="/blog/post-list">博文列表</router-link>
                                    <router-link to="/blog/tag-list">标签列表</router-link>
                                </div>
                            </li>
                        </router-link>
                        <a href="#">
                            <li class="icon-books">关于</li>
                        </a>
                        <a href="#">
                            <li class="icon-quotes-left">留言</li>
                        </a>
                    </ul>
                </div>
            </nav>
            <div class="tool-wrapper">
                <ul>
                    <li class="icon-search"></li>
                    <li class="icon-contrast"></li>
                </ul>
            </div>
            <router-link to="#" @click.native="logout"><span>退出登录</span></router-link>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        logout: function () {
            if (this.$cookies.isKey('login')) {
                this.$cookies.remove('login');
                this.$router.push({ path: '/login' }).catch(() => { });
            }
        }
    }
}
</script>

<style scoped>
@import url('../../assets/css/header.css');
</style>