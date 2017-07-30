<template>
  <div id="app">
    <transition name="slide">
      <router-view class="" style="">

      </router-view>
    </transition>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
html,body{
  height: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 0;
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1,h3{
  margin: 0;
}
.app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.bgcolor{
  background: #dcf5ef;
}
.qbg{
  background: #fff;
  padding: 20px;
}
.qbg:nth-child(2n){
  background: #dcf5ef;
}
</style>
