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
                now:34,
                total:0,
                piece:5,
                col:15
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
        },
        listPageUpdate(state,data){
            state.list.page.total = data.last_page
            state.list.page.col   = data.per_page
            state.list.page.piece = 5
        }
    },
    actions: {
        async TEST_MENU(sto,data){
        },
        async GET_LIST(sto,data){
            const exDataBody = new Array;
            const exDataHeaer = new Array;

            const option = {
                page : data.page ? data.page : sto.state.list.page.now
            }

            await this.dispatch('loading/SET_LOADING','회원목록을 불러오는 중입니다.')
            await this.$axios({
                method: 'GET',
                url: 'user',
                params :option,
                headers: {
                    'Authorization' : sto.state.authorization,
                    "Content-Type"  : "application/x-www-form-urlencoded",
                    "Accept"        : "application/json",
                }
            }).then(res=>{
                console.log(res)
                const page = {
                    last_page : res.data.users.last_page ,
                    per_page  : res.data.users.per_page ,
                
                }
                sto.commit('listPageUpdate',page)
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
                        
                        for(let i = 0; i <  res.data.users.data.length; i++){
                            const member = res.data.users.data[i]
                            exDataBody.push({
                                mb_name          : member.mb_name,
                                mb_id            : member.mb_id,
                                mb_nick          : member.mb_nick,
                                mb_phone         : member.mb_hp,
                                mb_chanel        : 'null',
                                mb_local         : 'null',
                                mb_report        : 'null',
                                mb_report1       : 'null',
                                mb_report2       : 'null',
                                mb_reg_date      : member.mb_datetime,
                                mb_login_date    : member.mb_today_login,
                                mb_login_state   : 'null',
                                mb_point         : member.mb_point,
                                mb_state         : 'null',
                                btn: [
                                    {action:'viewMember',text:'보기',id:member.mb_no}
                                ],
                            })
                        }

                }

                
            })
            sto.commit('listItemUpdate',exDataBody)
            sto.commit('listHedaerUpdate',exDataHeaer)
            this.dispatch('loading/END_LOADING')
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