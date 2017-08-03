<style>


</style>

<template>
    <div>

      <div
        :class="{'active':status}"
        :style="{backgroundImage:'url('+pic.url+')'}">
        <span v-if="status==5">已结束</span>
        <span v-else-if="status==1||status==2">距开抢{{time}}</span>
        <span v-else>距结束{{time}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{

    }
  },
  props:{

  },
  computed:{

  },
  methods:{

  },
  filter:{

  },
  watch:{

  },
  mounted(){
    
  },
  components: {
    Hello
  }
}
</script>
