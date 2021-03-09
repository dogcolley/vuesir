<template>
  <div>

    <h3>이몌뉴는 사용하지 않습니다. 지금은 테스트 용도로 사용하고있습니다.</h3>

    <v-list>
      <v-btn type="button" @click="openModal('Test')">Test 모달열기</v-btn>
      <v-btn type="button" @click="openModal('엑셀')">엑셀 모달열기</v-btn>
      <v-btn type="button" @click="openModal('SMS')">SMS 모달열기</v-btn>
      <v-btn type="button" @click="testcheckAuth('SMS')">회원정보 불러오기</v-btn>
    </v-list>

    <div>
      {{$store.state.sms.test_sms}}
    </div>

    <v-btn  @click="text_cnt()">cnt</v-btn>
    <v-btn  @click="testRetrun()">cnt global</v-btn>


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
    testcheckAuth:function(){
      this.$store.dispatch('MEMBER_INFO')
    },
    testRetrun:function(){
      this.$store.dispatch('sms/test_sms_return').then(data=>{
        console.log(data)
      })
    },
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
  },
  mounted(){
    console.log(this.$store.state.$menu)    
  }
}
</script>

<style>

</style>