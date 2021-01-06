<template>
    <router-view></router-view>
</template>

<script lang='js'>
  import Vue from 'vue';
  import login from './components/login';
  import blog from './components/blog';
  import headNav from './components/headNav';
  import indexPart from './components/indexPart';
  import postPart from './components/postPart';
  import postListPart from './components/postListPart';
  import tagListPart from './components/tagListPart';
  import footerCom from './components/footer';

  export default Vue.extend({
    data: function() {
      return {
      
      }
    },
    components: {
      login,
      blog,
      headNav,
      indexPart,
      postPart,
      postListPart,
      tagListPart,
      footerCom
    }
  });
</script>

<style>
</style>
