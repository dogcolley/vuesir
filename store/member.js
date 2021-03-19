export default {
    state:{
        name:'member',
        list:{
            total:0,
            header:[
                {name:'번호',sort:true,sm:true,btn:false},
                {name:'업체번호',sort:true,sm:true,btn:false},
                {name:'업체명',sort:true,sm:true,btn:false},
                {name:'대표전화',sort:false,sm:true,btn:false},
                {name:'담당자명',sort:false,sm:true,btn:false},
                {name:'담당자 연락처',sort:false,sm:true,btn:false},
                {name:'담당자 E-mail',sort:false,sm:true,btn:false},
                {name:'담당 마케터',sort:true,sm:true,btn:false},
                {name:'계약 건수',sort:true,sm:true,btn:false},
                {name:'계약 등록',sort:true,sm:true,btn:true},
                {name:'현재 계약상태',sort:true,sm:true,btn:false},
            ],
            option:{
                
            },
            page:{
                now:0,
                total:10,
                piece:5,
                col:10
            },
            query:`name=""&subject=''`,
            item:[{}]
        },
        info:{
            member:{
                mb_name:'',
                mb_age:'',
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
    mutations: {
        itemUpdate(state,data){
            state.list.item = data
        }   

    },
    actions: {
        GET_LIST(sto,data){
            //리스트 불러오기
            /*
            .page
            .action //search,next,prev,end,first,       
            */
           console.log(this)
            const exData = [{
                id:'123',
                ctr_id:'123',
                ctr_name:'업체명',
                ctr_call: '010-0000-0000',
                mb_name :'이름',
                mb_phone:'010-0000-0000',
                mb_email:'test@mail.com',
                md_name: 'name',
                ctr_num: '3',
                btn: [
                    {action:'viewMember',text:'보기',id:'123'}
                ],
                ctr_status:'진행중',
            }]
            sto.commit('itemUpdate',exData)
        },
        SET_PAGE(){
        //페이지 셋팅
        },
        GET_INFO(sto,data){
        //계약정보 요청하기

        },
        SET_UPDATE(sto,data){
        //계약정보 업데이트

        },
        SET_LIST_UPDATE(sto,data){
        //리스트 상태변화

        },
        SET_LIST_DELETE(sto,data){
        //리스트 삭제
        },
    }
}