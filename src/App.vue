
<template>
    <div>
        <headNav></headNav>
        <indexPart>
        </indexPart>
        <footerCom></footerCom>
    </div>
</template>

<script lang='js'>
  import Vue from 'vue';
  import headNav from './components/headNav';
  import indexPart from './components/indexPart';
  import footerCom from './components/footer';

  export default Vue.extend({
    data: function() {
      return {
      
      }
    },
    components: {
      headNav,
      indexPart,
      footerCom
    }
  });
</script>

<style>
</style>
