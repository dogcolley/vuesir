<template>
  <v-container class="U_bg01">

    <v-container>
      <v-row><!-- 여기엔 탑컨텐츠-->
        <v-col cols="12" md="5">
          <select name="" id="" class="U_select02" :style="{backgroundImage:`url(${icon_aw})`}">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
          </select>
          <input type="text" class="U_input01">
          <button type="button" class="U_btn04 U_btn03" title="검색" ><v-icon dense>mdi-magnify</v-icon></button>
          <button type="button" class="U_btn05 U_btn03" title="옵션검색" @click="advancedSearch=true"><v-icon dense >mdi-dots-horizontal</v-icon></button>
        </v-col>      

        <v-col cols="12" md="7" class="text-left text-md-right">
          <dl class="U_bd_cate01">
            <dt>전체</dt>
            <dd>130,124</dd>
            
            <dt>대기</dt>
            <dd>8,044</dd>
            
            <dt>작업대기</dt>
            <dd>690</dd>
            
            <dt>리뷰어신청(오픈)</dt>
            <dd>690</dd>
          </dl>
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
            <v-row><v-col>test</v-col></v-row>
            <v-row><v-col>test</v-col></v-row>
            <v-row><v-col>test</v-col></v-row>
            <v-row><v-col>test</v-col></v-row>
          </v-container>

        </v-sheet>
      </v-bottom-sheet>

      <v-row> <!-- 여기엔 탑컨텐츠-->
        <v-col cols="12" md="6" sm="6">
          <button type="button" class="U_btn03 U_btn04" title="체크"><v-icon dense> mdi-square-rounded-outline</v-icon></button>  
          <button type="button" class="U_btn03 U_btn06 U_ft_sz07"><v-icon dense>mdi-trash-can-outline</v-icon> 삭제</button>  
          <button type="button" class="U_btn03 U_btn06 U_ft_sz07">수정</button>  
          <div class="U_tooltip">
            <button type="button"  title="옵션" @click="option01 = !option01" class="U_btn03 U_btn06 U_ft_sz07">
              <v-icon dense>
                mdi-dots-horizontal
              </v-icon>
            </button>
            <div v-if="option01" class="U_tooltip_con">
              <ul>
                <li><button>Programmatic tooltip</button></li>
                <li><button>Programmatic tooltip</button></li>
                <li><button>Programmatic tooltip</button></li>
                <li><button>Programmatic tooltip</button></li>
              </ul>
            </div>

          </div>
          <button type="button" class="U_ft_sz07 U_btn07" ><v-icon dense> mdi-square-outline</v-icon>대기</button>
          <button type="button" class="U_ft_sz07 U_btn07" ><v-icon dense> mdi-square-outline</v-icon>취소</button>
  

          
        </v-col>    
        <v-col class="text-left text-sm-right text-mb-right"  cols="12" md="6" sm="6">
          <button type="button" class="U_btn05 U_btn03 U_ft_sz07">엑셀다운</button>        
          <button type="button" class="U_btn05 U_btn03 U_ft_sz07">종합리포트</button>        
          <button type="button" class="U_btn05 U_btn03 U_ft_sz07">오픈문자 </button>        
        </v-col>      
      </v-row>

    </v-container>
    
    <!-- 여기엔 탑컨텐츠-->
    <BasicTable :list="[]" :header="[]" name="Member" />
    
  </v-container>
</template>

<script>
import BasicTable from '~/components/common/BasicTable.vue';
import icon_aw from '~/assets/aw_down.svg'


export default {
  computed:{
  },
  components:{
    BasicTable
  },
  data: () => ({
    option01: false,
    icon_aw : icon_aw,
    
    advancedSearch: false,
    
    search_txt : '검색어를 입력해주세요',
    
    search_option:[
      {},
      {},
      {},
      {},
      {},
    ],

    select_option:{

    },

    board:[
      {},
      {},
      {},
      {},
      {},
    ],
    
    list:[
      {},
      {},
      {},
      {},
      {},
    ],

    page:{

    },
    
  }), 
}
</script>