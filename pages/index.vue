<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-row>
          <!-- 가입/탈퇴한회원수 -->
          <v-col class="pa-2" cols="12" md="6" sm="6">
            <StateMini 
              setClass="pa-2"
              :item="items[0]"
            />
          </v-col>
          <!-- 대기/완료계약건수 -->
          <v-col class="pa-2" cols="12" md="6" sm="6">
            <StateMini 
              setClass="pa-2"
              :item="items[1]"
            />
          </v-col>
          <!-- 일정 -->
          <v-col class="pa-2" cols="12" md="12">
            <CalendarsMini 
              link="/Calendar" 
              :calendars="calendars"
            />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6" md="12" sm="12">
        <v-row>
          <!-- 이슈 -->
          <v-col class="pa-2" cols="12" md="6" sm="6">
            <BoardMini 
              typeClass="col-type1"
              :tabUse="true"  
              link="https://naver.com" 
              title="이슈트레킹"
              :items="issue"
            />
          </v-col>
          <!-- 공지/커뮤니티 -->
          <v-col class="pa-2" cols="12" md="6" sm="6">
            <BoardMini 
              typeClass="col-type1"
              :tabUse="false"  
              link="https://naver.com" 
              title="공지/커뮤니티"
              :items="community"
            />
          </v-col>
        </v-row>
      </v-col>
      <!-- 영업 그룹 선택 -->
      <v-col cols="12">
        <v-row>
          <v-col class="pa-2" cols="12" lg="12" md="12" sm="12">
            <v-card class="pa-2">
              <v-row>
                <v-col cols="4">
                  <v-select 
                    v-model="sales.select"
                    :items="sales.items" 
                    :hide-details='true'
                    item-text="team_name" 
                    label="영업그룹"
                    dense 
                    outlined
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select 
                    v-model="mkt.select"
                    :items="mkt.items"
                    :hide-details='true'
                    item-text="team_mkt"
                    dense 
                    outlined
                    label="MKT"
                  ></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select 
                    v-model="md.select" 
                    :items="md.items" 
                    :hide-details='true'

                    item-text="team_md" 
                    dense 
                    outlined
                    label="MD"
                  ></v-select>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <!-- 진행 중 캠페인 상세 관리 -->
          <v-col class="pa-2" cols="12" md="6" sm="6">
            <BoardMini 
              typeClass="col-type2"
              :tabUse="false"  
              link="https://naver.com" 
              title="진행중 캠페인 상세 관리"
              :items="campagin_ing"
            />
          </v-col>
          <!-- 최근 3일 진행 완료 -->
          <v-col class="pa-2" cols="12" md="6" sm="6">
            <BoardMini 
              typeClass="col-type2"
              :tabUse="false"  
              link="https://naver.com" 
              title="최근 3일 진행 완료"
              :items="campagin_end"
            />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// 인덱스의 경우 추후 작업으로 
import CalendarsMini from "~/components/index/CalenderMini.vue";
import BoardMini from "~/components/index/BoardMini.vue";
import StateMini from "~/components/index/StateMini.vue";

export default {
  components:{
    CalendarsMini,
    BoardMini,
    StateMini
  },
  created(){
    this.$store.commit('setTitle','대시보드')
  },
  data:()=>({
    //가입/탈퇴한회원수 & 대기/완료계약건수
    items: [
      {
        avatar: require('~/assets/business_icon1.png'),
        title: '어제가입한회원 &mdash; <span class="icon_umb">7</span>명',
        subtitle: `어제탈퇴한회원 &mdash; <span class="icon_umb">0</span>명`,
        link : '',
      },
      {
        avatar: require('~/assets/business_icon2.png'),
        title: '계약승인대기 &mdash; <span class="icon_umb contract">20</span>건',
        subtitle: `계약승인완료 &mdash; <span class="icon_umb contract">18,807</span>건`,
        link : '',
      }
    ],
    
    //일정
    calendars: 
      {
        week: '2021-01-20 ~ 2021-01-26',
        header:[
          '화',
          '수',
          '목',
          '금',
          '토',
          '일',
          '월',
        ],
        list:[
          {
            date:'26',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },{
            date:'27',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },{
            date:'28',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },{
            date:'29',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },{
            date:'30',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },{
            date:'31',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },{
            date:'1',
            open: '159',
            selection: '103',
            end: '16',
            completion: '390',
          },
        ]
      },

    //이슈트레킹 목록
    issue : {
      board_info : [
        {
          title : '대기',
          total : 50,
          link  : '/Board?board=issue&cate=대기'
        },
        {
          title : '확인 중',
          total : 23,
          link  : '/Board?board=issue&cate=확인중'
        },
        {
          title : '완료',
          total : 45929,
          link  : '/Board?board=issue&cate=완료'
        },
      ],
      board_headers: [
          { text: '캠페인 명', value: 'name' },
          { text: '회차', value: 'number' },
          { text: '날짜', value: 'date' },
      ],
      board_list : [
        [
          {
            name: '[송파] 대기 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          }
        ],
        [
          {
            name: '[송파] 확인 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          }
        ],
        [
          {
            name: '[송파] 완료 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          }
        ],
      ]
    },

    // 공지/커뮤니티 목록
    community : {
      board_info : [
        {
          title : '대기',
          total : 50,
          link  : '/Board?board=issue&cate=대기'
        }
      ],
      
      board_headers: [
          { text: '캠페인 명', value: 'name' },
          { text: '회차', value: 'number' },
          { text: '날짜', value: 'date' },
      ],

      board_list : [
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          },
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            number: '6-3회차',
            date: '21.01.18',
          },
          {
            name: '[배송형] 해커스 한 권으로 끝내는 해커스 TESAT(테셋) 이론 + 적중문제',
            number: '8회차',
            date: '21.01.18',
          }
        ],
      ]
    },

    //영업그룹
    sales:{
      select: { team_name: '--'},
      items: [
        { team_name: '--'},
        { team_name: '전체'},
        { team_name: '1팀'},
        { team_name: '2팀'},
        { team_name: '3팀'},
        { team_name: 'B2B 1팀'},
        { team_name: 'B2B 2팀'},
        { team_name: 'NCT'},
        { team_name: 'NCT에이블'},
        { team_name: '에이전시'}
      ]
    },
    //mkt
    mkt:{
      select: { team_mkt: '--'},
      items: [
        { team_mkt: '--'},
        { team_mkt: '강근영'},
        { team_mkt: '강도훈'},
        { team_mkt: '강혜진'},
        { team_mkt: '김경열'},
        { team_mkt: '김근후'},
        { team_mkt: '김도현'},
        { team_mkt: '김민수'},
        { team_mkt: '김병수'}
      ]
    },
    //md
    md:{
      select: { team_md: '--'},
      items: [
        { team_md: '--'},
        { team_md: '김종현'},
        { team_md: '김중희'},
        { team_md: '박가영'},
        { team_md: '양양'},
        { team_md: '이한나'},
        { team_md: '제임스'},
        { team_md: '주빛나'},
      ]
    },

    // 진행중 캠페인 상세관리
    campagin_ing : {
      total : 245,
      board_info : [
        {
          title : '모집 중',
          total : 101,
          link  : '/Board?board=issue&cate=모집중'
        },
        
        {
          title : '오늘 선정',
          total : 26,
          link  : '/Board?board=issue&cate=오늘선정'
        },
        
        {
          title : '리뷰등록기간',
          total : 104,
          link  : '/Board?board=issue&cate=리뷰등록기간'
        },
        
        {
          title : '오늘 마감',
          total : 14,
          link  : '/Board?board=issue&cate=오늘마감'
        }
      ],
      
      board_headers: [
          { text: '캠페인 명', value: 'name' },
          { text: '분류', value: 'cate' },
          { text: '회차', value: 'round' },
          { text: '모집인원', value: 'people' },
          { text: '종료일자', value: 'date' },
      ],
      
      board_list : [
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            cate: '네이버 블로그',
            round: '1-9/1',
            people: '12/12',
            date: '21.01.18',
          }
        ],
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            cate: '네이버 블로그',
            round: '1-9/1',
            people: '12/12',
            date: '21.01.18',
          }
        ],
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            cate: '네이버 블로그',
            round: '1-9/1',
            people: '12/12',
            date: '21.01.18',
          }
        ],
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            cate: '네이버 블로그',
            round: '1-9/1',
            people: '12/12',
            date: '21.01.18',
          }
        ],
      ]
    },

    // 최근 3일 진행완료
    campagin_end : {
      total : 39,
      board_info : [
        {
          title : '종합리포트 발송',
          total : 101,
          link  : '/Board?board=issue&cate=종합리포트발송'
        },
        
        {
          title : '종합리포트 미발송',
          total : 26,
          link  : '/Board?board=issue&cate=종합리포트미발송'
        }
      ],
      
      board_headers: [
          { text: '캠페인 명', value: 'name' },
          { text: '분류', value: 'cate' },
          { text: '회차', value: 'round' },
          { text: '모집인원', value: 'people' },
          { text: '종료일자', value: 'date' },
      ],
      
      board_list : [
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            cate: '네이버 블로그',
            round: '1-9/1',
            people: '12/12',
            date: '21.01.18',
          }
        ],
        [
          {
            name: '[송파] 준오헤어 현대시티몰가든파이브점 (원식 디자이너)',
            cate: '네이버 블로그',
            round: '1-9/1',
            people: '12/12',
            date: '21.01.18',
          }
        ]
      ]
    },
  })
}
</script>

<style lang="scss">
</style>

<style lang="scss" scoped>
/* 영업그룹/mkt/md */
.v-subheader{
  font-weight: bold;
  @extend .U_ft_sz05;
}  
</style>
