<template>
  <v-app>
    <TopFixed />
    <BasicTable />
    <div style="height:1500px"></div>
  </v-app>
</template>

<script>
import TopFixed from '~/components/common/TopFixed.vue';
import BasicTable from '~/components/common/BasicTable.vue';

export default {
  computed:{
    TopFixed,
    BasicTable
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    start_dt: false,
    end_dt: false,
    search: '',
    total : '34,567',
    join : 67,
    drop_out : 7,

    //검색키워드
    search_key:{
      select: { keywords: '이름'},
      items: [
        { keywords: '이름'},
        { keywords: '닉네임'},
        { keywords: '아이디'},
        { keywords: '이메일'},
        { keywords: '블로그주소'},
        { keywords: '휴대폰'},
        { keywords: '추천인아니디'},
        { keywords: '제휴아이디'},
        { keywords: '페이스북URL'},
        { keywords: '인스타그램URL'},
        { keywords: '추가채널URL'},
        { keywords: '카페URL'},
      ]
    },

    //가입기간
    join_key:{
      select: { date_type: '어제'},
      items: [
        { date_type: '어제'},
        { date_type: '지난주'},
        { date_type: '최근 10일'},
        { date_type: '최근 한 달'},
        { date_type: '지난달'},
      ]
    },

    //포인트
    point_key:{
      select: { point_type: '500만이상'},
      items: [
        { point_type: '500만이상'},
        { point_type: '100~500만'},
        { point_type: '50~100만'},
        { point_type: '10~50만'},
        { point_type: '5~10만'},
        { point_type: '1~5만'},
        { point_type: '1만이하'},
      ]
    },

    //회원목록
    memver_list : {
      opstion:{
        class : 'test999999999'
      },
      headers: [
          {
            text: '이름',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '아이디', value: 'id' },
          { text: '닉네임', value: 'nick' },
          { text: '연락처', value: 'addr' },
          { text: '대표채널', value: 'chammel' },
          { text: '활동지역', value: 'area' },
          { text: '신청', value: 'ask' },
          { text: '선정', value: 'select' },
          { text: '이슈율', value: 'percent' },
          { text: '가입일', value: 'in_date' },
          { text: '최근접속', value: 'recent_access' },
          { text: '로그인', value: 'login' },
          { text: '포인트', value: 'point' },
          { text: '상태', value: 'state' },
          { text: '보기', value: 'view' ,class: 'wow'}
      ],
      list : [
        {
          name: '홍길동',
          id: 'test123',
          nick: '테스트123',
          addr: '01012345678',
          chammel: '블로그(1년)',
          area: '부산/동래구',
          ask: 5,
          select: 0,
          percent: '1',
          in_date: '21.01.27 15:00',
          recent_access: '21.01.28 15:01',
          login: 2,
          point: 100,
          state: '우수(0)',
          view: '보기',
        },
        {
          name: '강감찬',
          id: 'test123',
          nick: '테스트123',
          addr: '01012345678',
          chammel: '블로그(1년)',
          area: '부산/동래구',
          ask: 0,
          select: 7,
          percent: '1',
          in_date: '21.01.27 15:00',
          recent_access: '21.01.28 15:01',
          login: 2,
          point: 200,
          state: '우수(0)',
          view: '보기',
        },
        {
          name: '송감찬',
          id: 'test123',
          nick: '테스트123',
          addr: '01012345678',
          chammel: '블로그(1년)',
          area: '부산/동래구',
          ask: 0,
          select: 0,
          percent: '1',
          in_date: '21.01.27 15:00',
          recent_access: '21.01.28 15:01',
          login: 2,
          point: 100,
          state: '우수(0)',
          view: '보기',
        }
      ]
    },
  }), 
}
</script>

<style lang="scss">
.member_select{
  .v-input__control .v-input__slot{
    margin: 0px;
  }
  .v-input__control  .v-text-field__details{display: none;}
  fieldset{color: $color08 !important;border-radius: $border_radius01;}
  
  .v-select__slot .v-input__append-inner .primary--text{
    color:$color08 !important;caret-color: $color08 !important;
  }
}
.member_search{
  border: 1px solid rgba(0, 0, 0, 0.2);
  .v-input__slot{
    input{color: rgba(0, 0, 0, 1);}
  }
  .v-input__slot:before{display: none;}
  .v-input__slot:after{display: none;}
  .v-input__append-inner{
    height: 100%;margin: 0px;padding: 7px !important;border-left: 1px solid $color08;
  }
}
.member_data{
  .v-text-field__details{display: none;}
  .v-input__slot{margin: 0;}
  .v-input__slot:before{display: none;}
}
</style>

<style lang="scss" scoped>
.v-input{padding:0px;margin:0px;}
.btn{
  background-color: #fff !important;box-shadow:none;border:1px solid $color08;border-radius: 0;
  .v-icon{color: rgba(0, 0, 0, 0.54);}
  .btn{transform: rotate(180deg);}
}
.stats{
  div{display: inline-block;margin-top:11px;font-weight: bold;color:#00ba2e;}
  .tit{
    color: #000; padding-right: 5px;border-right: 1px solid $color08;
    line-height: 18px;
  }
}
</style>