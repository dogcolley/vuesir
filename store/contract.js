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
                    {col:6,text:'등록일자시작',type:'date',value:'',name:'ctr_reg_dt_start',option:[]},
                    {col:6,text:'등록일자종료',type:'date',value:'',name:'ctr_reg_dt_end',option:[]},
                    {col:6,text:'test input ',type:'text',value:'',name:'ctr_test_text',option:[]},
                    {col:6,text:'test radio ',type:'radio',value:'',name:'ctr_test_radio',option:['1','2','3','4'],label:['라벨1','라벨2','라벨3','라벨4']},
                    {col:12,text:'test checkbox ',type:'checkbox',value:'',name:'ctr_test_radio',option:['1','2','3','4'],label:['라벨1','라벨2','라벨3','라벨4']},
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
            header:[
                {name:'번호',sort:true,sm:true},
                {name:'업체번호',sort:true},
                {name:'업체명',sort:true},
                {name:'대표전화',sort:true},
                {name:'담당자명',sort:true},
                {name:'담당자 연락처',sort:true},
                {name:'담당자 E-mail',sort:true},
                {name:'담당 마케터',sort:true},
                {name:'계약 건수',sort:true},
                {name:'계약 등록',sort:true},
                {name:'현재 계약상태',sort:true},
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
        info:{},
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
                ctr_btn: '버튼',
                ctr_status:'진행중',
            }]
            //sto.commit('itemUpdate',exData)

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