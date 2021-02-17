<template>
  <v-app dark>
    <!--모달-->
    <template v-for="(data, index) in $store.state.modalList">
      <ModalList :type="data" :key="index" :index="index" />
    </template>
    
    <!--로딩-->
    <Loading :Loading="$store.state.loading" :text="$store.state.loadingTxt" />
  
    <!--왼쪽 네비 -->
    <Gnb :drawer="drawer" @close="drawer = false" @show="drawer=true"/>
    
    <!--헤더 -->
    <v-app-bar
      v-if="$store.state.login"
      :clipped-left="clipped"
      fixed
      app
      class="U_hd"
      height="45"
    >

      <v-app-bar-nav-icon  @click.stop="drawer = !drawer"/>

      <v-toolbar-title v-text="$store.state.title" class="logo_tit"/>
      
      <v-spacer />

      <NuxtLink to="/"><v-btn icon><v-icon>mdi-home</v-icon></v-btn></NuxtLink>

      <v-btn icon @click="bell=true"><v-icon>mdi-bell</v-icon></v-btn>

      <v-btn icon @click="$store.dispatch('LOGOUTOUT')"><v-icon>mdi-account-arrow-right-outline</v-icon></v-btn>

      <v-btn icon @click.stop="rightDrawer = !rightDrawer"><v-icon>mdi-account-circle</v-icon></v-btn>

    </v-app-bar>

    <!--알림창 -->
    <Bell :bell="bell"  @close="bell=false" />
    
    <!--서브네비 -->
    <Snb :rightDrawer="rightDrawer"  @close="rightDrawer = false" />

    <!--메인 -->
    <v-main>
      <Banner v-if="$store.state.login " height="100px" />
      <nuxt />
    </v-main>

  </v-app>
</template>

<script>
import Bell from "@/components/default/Bell.vue";
import Loading  from "@/components/default/Loading.vue";
import ModalList from "@/components/default/ModalList.vue";
import Gnb from "@/components/default/Gnb.vue";
import Banner from "@/components/default/Banner.vue";
import Snb from "@/components/default/Snb.vue";

export default {
  components: {
    Loading,
    ModalList,
    Bell,
    Gnb,
    Banner,
    Snb
  },
  data () {
    return {
      drawer: false,
      fixed: false,
      bell: false,
      rightDrawer: false,
      clipped: false,
    }
  },
  middleware: 'authCheck',
  mounted(){
    this.$store.dispatch('CHECK_LODDING')
  },
  methods:{

  }
}
</script>