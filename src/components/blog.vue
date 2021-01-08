<template>
    <div>
        <headNav></headNav>
        <router-view></router-view>
        <footerCom></footerCom>
    </div>
</template>

<script>
import headNav from './headNav.vue';
import indexPart from './indexPart.vue';
import postPart from './postPart.vue';
import postListPart from './postListPart.vue';
import tagListPart from './tagListPart.vue';
import footerCom from './footer.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        headNav,
        footerCom,
        indexPart,
        postPart,
        postListPart,
        tagListPart
    },
    created: function () {
        if (!this.$cookies.get('login')) {
            this.$router.push({ path: '/login' }).catch(() => { });
        }
    }
}
</script>

<style scoped>
</style>