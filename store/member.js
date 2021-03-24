export default {
    state:{
        name:'member',
        list:{
            total:0,
            header:[
            ],
            option:{
                
            },
            page:{
                now:0,
                total:10,
                piece:5,
                col:10
            },
            item:[{}]
        },
        info:{
            member:{
                mb_id:'',
                mb_name:'',
                mb_age:'',
                mb_sex:'',
                mb_phone:'',
                mb_local:'',
                mb_blog:'',
                mb_cafe:'',
                mb_yotube:'',
                mb_insta:'',
                mb_choise:'',
                mb_apply:'',
                mb_reivew:'',
            },
        },
    },
    getters: {
    },
    mutations: {
        listItemUpdate(state,data){
            state.list.item = data
        },
        listHedaerUpdate(state,data){
            state.list.header = data
        }
    },
    actions: {
        GET_LIST(sto,data){
            //리스트 불러오기
            /*
            .page
            .action //search,next,prev,end,first,       
            */
            const exDataBody = new Array;
            const exDataHeaer = new Array;
            switch(data.type){
                case 'contract' :
                break;

                case 'campaign' :
                break;

                case 'issuse' :
                break;

                default:
                    exDataHeaer.push(
                        {name:'이름',sort:true,xs:false,btn:false},
                        {name:'아이디',sort:true,xs:false,btn:false},
                        {name:'닉네임',sort:true,xs:true,btn:false},
                        {name:'휴대폰',sort:true,xs:true,btn:false},
                        {name:'대표채널',sort:true,xs:false,btn:false},
                        {name:'활동지역',sort:true,xs:false,btn:false},
                        {name:'신청',sort:true,xs:true,btn:false},
                        {name:'선정',sort:true,xs:true,btn:false},
                        {name:'이슈율',sort:true,xs:false,btn:false},
                        {name:'가입일',sort:true,xs:false,btn:false},
                        {name:'최근접속',sort:true,xs:false,btn:false},
                        {name:'로그인',sort:true,xs:false,btn:false},
                        {name:'포인트',sort:true,xs:true,btn:false},
                        {name:'상태',sort:true,xs:true,btn:false},
                        {name:'보기',sort:true,xs:true,btn:true},
                    );
                     
                    exDataBody.push({
                        mb_name:'이름',
                        mb_id:'id',
                        mb_nick:'닉네임',
                        mb_phone:'010-1111-1111',
                        mb_chanel:'채널',
                        mb_local:'지역',
                        mb_report:'1',
                        mb_report1:'1',
                        mb_report2:'1',
                        mb_reg_date:'2020-02-02',
                        mb_login_date:'2020-02-03',
                        mb_login_state:'접속중',
                        mb_point:'20',
                        mb_state:'우수(?)',
                        btn: [
                            {action:'viewMember',text:'보기',id:'123'}
                        ],
                    })
            }
            sto.commit('listItemUpdate',exDataBody)
            sto.commit('listHedaerUpdate',exDataHeaer)
        },
        SET_PAGE(){
        //페이지 셋팅
        },
        GET_INFO(sto,data){
        //계약정보 요청하기

        },
        SET_INFO_UPDATE(sto,data){
        //계약정보 업데이트
            console.log('회원정보 업데이트')
        },
        SET_LIST_UPDATE(sto,data){
        //리스트 상태변화

        },
        SET_LIST_DELETE(sto,data){
        //리스트 삭제
        },
    }
}