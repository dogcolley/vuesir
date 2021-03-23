<template>
  <v-container class="U_bg01">
   
   <ListTop name="member" :config="$store.state.config.member" />

    <v-row>
      <v-col cols="12">
        <BasicTable :data="$store.state.member.list" name="member" :page="true" />
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
import ListTop from '~/components/common/ListTop.vue'
import BasicTable from '~/components/common/BasicTable.vue'

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
    this.$store.commit('setTitle','회원관리')
  },
  mounted(){
    this.$store.dispatch('member/GET_LIST')
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
