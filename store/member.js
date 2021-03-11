export default {
    state:{
        name:'member',
        config:{
            ch:{
                /*
                
                <select name="SEARCH_TYPE">
                        <option value="01" selected=""></option>
                        <option value="02"></option>
                        <option value="03"></option>
                        <option value="04"></option>
                        <option value="05"></option>
                        <option value="06"></option>
                        <option value="07"></option>
                        <option value="08"></option>
                        <option value="09"></option>
                        <option value="10"></option>
                        <option value="11"></option>
                        <option value="12"></option>
                    </select>

                */ 
                option:[
                    {text:'닉네임', value:''},
                    {text:'아이디', value:''},
                    {text:'이메일', value:''},
                    {text:'블로그주소', value:''},
                    {text:'연락처', value:''},
                    {text:'추천인아이디', value:''},
                    {text:'제휴아이디', value:''},
                    {text:'페이스북URL', value:''},
                    {text:'인스타그램URL', value:''},
                    {text:'유튜브URL', value:''},
                    {text:'추가채널URL', value:''},
                    {text:'카페URL', value:''},
                ],
                keyWord: '',
                detail: [
                    {cols:6,col:3,text:'가입일(시작일)',type:'date',value:'',name:'',option:[],label:[]},
                    {cols:6,col:3,text:'가입일(종료일)',type:'date',value:'',name:'',option:[],label:[]},
                    {cols:6,col:3,text:'포인트(최소)',type:'number',value:'',name:'',option:[],label:[]},
                    {cols:6,col:3,text:'포인트(최대)',type:'number',value:'',name:'',option:[],label:[]},
                    {cols:6,col:3,text:'성별',type:'select-radio',value:'',name:'',option: [
                        {text:'남자',value:'man'},
                        {text:'여자',value:'woman'},

                    ] },
                    {cols:6,col:3,text:'보유채널',type:'select-checkbox',value:'',name:'',option: [
                        {text:'블로그',value:'blog'},
                        {text:'인스타그램',value:'instagram'},
                        {text:'유튜브',value:'youtube'},
                        {text:'기타',value:'other'},
                    ] },
                    {cols:6,col:3,text:'활동지역',type:'select-radio',value:'',name:'',option: [] },
                    {cols:6,col:3,text:'채널경력',type:'select-radio',value:'',name:'',option: [] },
                    {cols:6,col:3,text:'활동기간',type:'select-radio',value:'',name:'',option: [] },
                    {cols:6,col:3,text:'리뷰수',type:'select-radio',value:'',name:'',option: [] },
                    {cols:6,col:3,text:'서울오빠지수',type:'select-checkbox',value:'',name:'',option: [] },
                    {cols:6,col:3,text:'회원상태',type:'select-checkbox',value:'',name:'',option: [] },
                    {cols:6,col:3,text:'관심사',type:'select-checkbox',value:'',name:'',option: [] },
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
                {name:'대표전화',sort:false},
                {name:'담당자명',sort:false},
                {name:'담당자 연락처',sort:false},
                {name:'담당자 E-mail',sort:false},
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
        //sto.dispatch('GET_LIST')

        },
        SET_LIST_DELETE(sto,data){
        //리스트 삭제
        //sto.dispatch('GET_LIST')
            alert('del test')
        },
    }
}