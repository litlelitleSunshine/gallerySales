<template>
  <div id="app">
    <navMenu></navMenu>
    <router-view/>
    <div class="copyRight">&#169;版权所有&nbsp;陈小茜</div>
  </div>
</template>

<script>
import navMenu from './navMenu'
export default {
  name: 'App',
  components: {
    navMenu
  }
}
</script>

<style>
#app .copyRight{
  /* position: absolute; */
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
