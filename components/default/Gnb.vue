<template>
  <v-navigation-drawer
      v-model="show"
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-if="$store.state.login"
      class="U_gnb"
      fixed
      app
    >
      <v-list>
          <div
              v-for="(item, i) in $store.state.$menu"
              :key="i"
              class="U-dep1"
              :class="item.active ? 'U-dep1-on':'' "
          >
            <v-list-item
              :to="item.to"
              router
              exact
            >
              <v-list-item-action>
                <v-icon dense>{{ item.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
            <div 
              v-if="item.dep2" 
              class="U-dep2"
            >
              <v-btn 
                class="btn" 
                type="button" 
                :height="48" 
                :width="48" 
                :fab="true"
                :depressed="false"
                :plain="false"
                :outlined="false"
                exact-active-class="on"
                @click="()=>{item.active = item.active ? false : true }">
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
              <v-list>
                <v-list-item
                  v-for="(item2,j) in item.dep2"
                  :key="j"
                  :to="item2.to"
                >
                <v-list-item-content>
                  <v-list-item-title v-text="item2.title"/>
                </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </div>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    props:{
        drawer: Boolean,
        clipped :Boolean
    },
    data(){
        return{
            show : null,
            miniVariant : false,
        }
    },
    watch:{
        drawer : function(){
          this.show = this.drawer
        },
        show : function(){
            if(!this.show)
                this.$emit('close')
            else 
                this.$emit('show')
        }
    }
}
</script>

<style>

</style>