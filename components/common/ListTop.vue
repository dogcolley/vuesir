<template>
   <v-container class="U_m_pd0">
      
      <h3 style="background:pink">{{name}}</h3>

      <v-row><!-- 여기엔 탑컨텐츠-->
        <v-col cols="12" md="5" class="U_m_pd0_bm">
          <select name="" id="" class="U_select02 ch-sl01" :style="{backgroundImage:`url(${icon_aw})`}">
              <option value=""  v-for="(option,index) in config.ch.option" :key="index" >{{option.text}}</option>
          </select>
          <input type="text" class="U_input01 ch-input01">
          <button type="button" class="U_btn04 U_btn03" title="검색" ><v-icon dense>mdi-magnify</v-icon></button>
          <button type="button" class="U_btn05 U_btn03" title="옵션검색" @click="advancedSearch=true"><v-icon dense >mdi-dots-horizontal</v-icon></button>
        </v-col>      

        <v-col cols="12" md="7" class="text-left text-md-right">
          <ul class="U_bd_cate01">
              <li v-for="(cate,index) in config.cate" :key="index">
                  <span class="label" >{{cate.text}}</span>
                  <button class="value" >{{cate.num}}</button>
              </li>
          </ul>
        </v-col>      
      </v-row>

      <v-bottom-sheet
        inset
        v-model="advancedSearch"
      >
        <v-sheet height="3000px">
          <v-toolbar
            color="white"
            flat
          >
              <v-btn
                icon
                light
                title="취소 및 닫기"
                @click="advancedSearch = false"
              >
                <v-icon color="grey darken-2">
                  mdi-arrow-left
                </v-icon>
              </v-btn>
              
              <v-btn
                icon
                light
                title="검색"
                @click="advancedSearch = false"
              >
                <v-icon color="grey darken-2">
                  mdi-magnify
                </v-icon>
              </v-btn>
              <v-toolbar-title class="grey--text text--darken-4 U_ft_fm01">
                검색 상세옵션	
              </v-toolbar-title>

              <v-spacer></v-spacer>
    
              <v-btn
                light
                icon
                title="리셋"
              >
                <v-icon
                  medium
                >
                  mdi-refresh-circle
                </v-icon>
              </v-btn>
          </v-toolbar>
          
          <v-container>
            <v-row>
                <v-col style="border:1px solid pink" cols="12" md="6"  v-for=" (input, index) in config.ch.detail" :key="index"><SearchOptions  :name="name" :data="input" /></v-col>
            </v-row>
          </v-container>

        </v-sheet>
      </v-bottom-sheet>

      <v-row> <!-- 여기엔 탑컨텐츠-->
        <v-col cols="12" md="5" sm="5" class="U_m_pd0_bm">
          <button type="button" class="U_btn03 U_btn04" title="체크"><v-icon dense> mdi-square-rounded-outline</v-icon></button>  
          <button type="button" class="U_btn03 U_btn06 U_ft_sz07" @click="$store.dispatch(`${name}/SET_LIST_DELETE`)"><v-icon dense>mdi-trash-can-outline</v-icon> 삭제</button>  
          <button type="button" class="U_btn03 U_btn06 U_ft_sz07">수정</button>  
          <div class="U_tooltip">
            <button type="button"  title="옵션" @click="listOption = !listOption" class="U_btn03 U_btn06 U_ft_sz07">
              <v-icon dense>
                mdi-dots-horizontal
              </v-icon>
            </button>
            <div v-if="listOption" class="U_tooltip_con">
              <ul>
                <li><button>Programmatic tooltip</button></li>
                <li><button>Programmatic tooltip</button></li>
                <li><button>Programmatic tooltip</button></li>
                <li><button>Programmatic tooltip</button></li>
              </ul>
            </div>
          </div>

          
        </v-col>    
        <v-col class="text-left text-sm-right text-mb-right"  cols="12" md="7" sm="7">
          <button type="button" class="U_btn05 U_btn03 U_ft_sz07">엑셀다운</button>        
          <button type="button" class="U_btn05 U_btn03 U_ft_sz07">종합리포트</button>        
          <button type="button" class="U_btn05 U_btn03 U_ft_sz07">오픈문자 </button>        
        </v-col>      
      </v-row>

    </v-container>
</template>

<script>
import icon_aw from '~/assets/aw_down.svg'
import SearchOptions from '~/components/common/SearchOptions'

export default {
    props:{
        name:String,
        config:Object
    },
    components:{
        SearchOptions,
    },
    data: () => ({
        icon_aw : icon_aw,
        advancedSearch: false,
        listOption: false,
        search:{}
   }),

}
</script>

<style>

</style>