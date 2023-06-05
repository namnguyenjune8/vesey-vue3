<template lang="">
  <div>
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    this.$router.beforeEach((to, from, next) => {
      document.title = to.meta.title || 'Trang web mặc định'
      next();
    });
  }
}
</script>
<style lang="">
  
</style>