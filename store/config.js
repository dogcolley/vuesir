export default {
    state:{
        name:'contract',
        contract:{
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
        member:{
            ch:{
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
    },
    mutations: {
    },
    actions: {
        GET_CONFIG(state,data){

        }
    }
}