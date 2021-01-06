<template>
    <div>
        <headNav></headNav>
        <router-view></router-view>
        <footerCom></footerCom>
    </div>
</template>

<script>
import headNav from './headNav';
import indexPart from './indexPart';
import postPart from './postPart';
import postListPart from './postListPart';
import tagListPart from './tagListPart';
import footerCom from './footer';

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