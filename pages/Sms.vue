<template>
  <div>
    <v-list>
      <v-btn type="button" @click="openModal('Test')">Test 모달열기</v-btn>
      <v-btn type="button" @click="openModal('엑셀')">엑셀 모달열기</v-btn>
      <v-btn type="button" @click="openModal('SMS')">SMS 모달열기</v-btn>
    </v-list>

    <div>
      {{$store.state.sms.test_sms}}
    </div>

    <v-btn  @click="text_cnt()">cnt</v-btn>
    <v-btn  @click="$store.dispatch('TESTING')">cnt global</v-btn>

    
    <Test />

  </div>
</template>

<script>
import Test from "@/components/Test.vue";
export default {
  components:{
    Test
  },
  methods:{

    text_cnt : function(){
      this.$store.dispatch('sms/test_sms_add_action')
    },  
    openModal : function(setModal){
      this.$store.commit('modal/addModalList',{
        type:setModal,
        width:600,
        height:300
      })
    }
  },
  created(){
    this.$store.commit('setTitle','SMS관리')
  }
}
</script>

<style>

</style>