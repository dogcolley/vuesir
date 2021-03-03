<template>
  <v-container class="U_bg01">
    <v-row><!-- 여기엔 탑컨텐츠-->
      <v-col>
        
        <select name="" id="" class="U_select02" :style="{backgroundImage:`url(${icon_aw})`}">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
        </select>
        <input type="text" class="U_input01">
        <button type="button" class="U_btn04 U_btn03" title="검색" ><v-icon dense>mdi-magnify</v-icon></button>
        <button type="button" class="U_btn05 U_btn03" title="옵션검색" @click="advancedSearch=true"><v-icon dense >mdi-dots-horizontal</v-icon></button>
      </v-col>      

      <v-col>
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
        <table class="U_table02">
              <tr>
                <td colspan="2">1</td>
                <td colspan="2">2</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <td colspan="2">1</td>
                <td colspan="2">2</td>
              </tr>
        </table>
      </v-sheet>
    </v-bottom-sheet>



    <v-row> <!-- 여기엔 탑컨텐츠-->
      <v-col>
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
      <v-col>
        <button type="button" class="U_btn05 U_btn03 U_ft_sz07">엑셀다운</button>        
        <button type="button" class="U_btn05 U_btn03 U_ft_sz07">종합리포트</button>        
        <button type="button" class="U_btn05 U_btn03 U_ft_sz07">오픈문자 </button>        
      </v-col>      
    </v-row>
    
    
    <v-row class="U_ft_sz06"><!-- 여기엔 탑컨텐츠-->
          <v-col><button type="button">체크박스</button></v-col>
          <v-col><button type="button">이름</button></v-col>
          <v-col><button type="button">아이디</button></v-col>
          <v-col><button type="button">닉네임</button></v-col>
          <v-col><button type="button">대표체널</button></v-col>
          <v-col><button type="button">활동지역</button></v-col>
          <v-col><button type="button">신청</button></v-col>
          <v-col><button type="button">선정</button></v-col>
          <v-col><button type="button">이슈률</button></v-col>
          <v-col><button type="button">가입일</button></v-col>
          <v-col><button type="button">최근접속</button></v-col>
          <v-col><button type="button">로그인</button></v-col>
          <v-col><button type="button">포안트</button></v-col>
          <v-col><button type="button">상태</button></v-col>
          <v-col><button type="button">보기</button></v-col>      
    </v-row>

    <v-row class="U_ft_sz07"><!-- 여기엔 탑컨텐츠-->
      <v-col>
      </v-col>      
    </v-row>


  </v-container>
</template>

<script>
//<BasicTable :list="[]" :header="[]" name="Member" />
//import TopFixed from '~/components/common/TopFixed.vue';
import BasicTable from '~/components/common/BasicTable.vue';
import icon_aw from '~/assets/aw_down.svg'


export default {
  computed:{
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