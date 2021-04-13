<template>
  <v-container class="U_bg01">
   
   <ListTop name="campagin"  :config="$store.state.config.campagin" />

    <v-row>
      <v-col cols="12">
        <BasicTable :data="$store.state.campagin.list" name="campagin" />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import ListTop from '~/components/common/ListTop.vue';
import BasicTable from '~/components/common/BasicTable.vue';


export default {
  computed:{
  },
  components:{
    BasicTable,
    ListTop
  },
  data: () => ({

  }),
  created(){
    this.$store.commit('setTitle','켐페인관리')
  },
  async mounted(){
    this.$store.dispatch('campagin/GET_LIST',{type:'main'})
  }
}
</script>


<style lang="scss">

.ch-sl01{
  @include xs{
    max-width:70px
  }
}
.ch-input01{
  width:180px;
  @include xs{
    max-width:calc( 100% - 157px )
  }
}


</style>
