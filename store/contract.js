export default {
    state:{
        name:'contract',
        config:{
            ch:{
                option:[
                    {text:'업체명', value:'name'},
                    {text:'담당마켓터', value:'mb_nick'},
                    {text:'계약번호', idx:'ctr_idx' }, 
                    {text:'켐페인명', idx:'cam_idx' }, 
                ],
                keyWord: '',
                detail:[
                    {text:'등록일자시작',type:'date',value:'',name:'ctr_reg_dt_start',option:[]},
                    {text:'등록일자종료',type:'date',value:'',name:'ctr_reg_dt_end',option:[]},
                    {text:'test input ',type:'text',value:'',name:'ctr_test_text',option:[]},
                    {text:'test radio ',type:'radio',value:'',name:'ctr_test_radio',option:['1','2','3','4']},
                    {text:'test checkbox ',type:'checkbox',value:'',name:'ctr_test_radio',option:['1','2','3','4']},
                ]
            },
            cate:[
                {text:'전체',num:'9999',query:'all'},
                {text:'대기',num:'8888',query:'all'},
                {text:'완료',num:'7777',query:'all'},
                {text:'취소',num:'6666',query:'all'},
            ],
        },
        list:{
            total:0,
            option:{
                
            },
            page:{
                now:0,
                total:10,
                piece:5,
            },
            query:`name=""&subject=''`,
            item:[
                {},
                {},
                {},
                {},
                {},
            ]
        },
        info:{},
    },
    mutations: {

    },
    actions: {
        GET_LIST(sto,data){
        //리스트 불러오기
        /*
        .page
        .action //search,next,prev,end,first,
        
        */
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
        //sto.dispatch('GET_LIST')

        },
        SET_LIST_DELETE(sto,data){
        //리스트 삭제
        //sto.dispatch('GET_LIST')
            alert('del test')
        },
    }
}