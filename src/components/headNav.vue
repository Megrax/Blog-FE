<template>
    <header>
        <div class="top-nav">
            <h1>Megrax's Blog</h1>
            <nav>
                <div class="list-wrapper">
                    <ul>
                        <router-link to="/index">
                            <li class="icon-home2">首页</li>
                        </router-link>
                        <a href="#">
                            <li class="icon-pacman lists">
                                <span>列表</span>
                                <div class="dropdown-content">
                                    <a href="#">博文列表</a>
                                    <a href="#">标签列表</a>
                                </div>
                            </li>
                        </a>
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
            <a href="#" onclick="document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 GMT;'"><span>退出登录</span></a>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('../../assets/css/header.css');
</style>