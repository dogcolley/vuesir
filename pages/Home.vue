<template>
  <div class="home">
    
  </div>
</template>

<style>
</style>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data:()=>{
    return {
      tableData01 : [
        [
         '켐페인명',
         '2020-12-12',
         '2' 
        ],
      ]
    }
  },
  computed:{
    test : function(){
      return this.$store.state.test
    }
  },
  created(){
    this.$store.commit('setTitle','마이페이지')
  },
}
</script>
