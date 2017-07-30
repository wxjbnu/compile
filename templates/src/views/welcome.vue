<template>
  <div class="welcome" style="position: relative;">
    <img style="width: 100%;" src="./../assets/end.jpg" alt="">
    <h3 style="position: absolute;left: 6%;top: 11%;color: #4dd3b1;">
      Dear 
      <span>{{nickname}}</span>
    </h3>
  </div>
</template>


<script>
export default {
  name: 'welcome',
  data () {
    return {
      nickname: ''
    }
  },
  methods:{

  },
  mounted(){
    // console.log(this.$route.query.nickname)
    this.nickname = decodeURIComponent(this.$route.query.nickname)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
