<template>
  <div class="home">
    <img alt="Vue logo" id="asd" src="https://zcd-dev.oss-cn-hangzhou.aliyuncs.com/212/2020-04-01/uejQ-20200401140222.jpg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style>
  #asd{
    width: 20%;
  }

</style>
