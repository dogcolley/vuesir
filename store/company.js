export default {
    state:{
        name:'company',
        list:{
            total:0,
            header:[
            ],
            option:{
                
            },
            page:{
                now:1,
                total:0,
                piece:5,
                col:15
            },
            item:[{}]
        },
        info:{
            company:{
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
            state.list.page.now   = data.page
        },
        viewInfoUpdate(state,data){
            state.info.company = data;
        }
    },
    actions: {
        async GET_LIST(sto,data){
            const token = sto.rootState.authorization
            const exDataBody = new Array
            const exDataHeaer = new Array
            const option = {
                page : data.page ? data.page : sto.state.list.page.now
            }

            await this.dispatch('loading/SET_LOADING','회원목록을 불러오는 중입니다.')
            await this.$axios({
                method: 'GET',
                url: 'company',
                params :option,
                headers: {
                    'Authorization' : token,
                    "Content-Type"  : "application/x-www-form-urlencoded",
                    "Accept"        : "application/json",
                }
            }).then(res=>{
                console.log(res)
                const page = {
                    last_page : res.data.companies.last_page ,
                    per_page  : res.data.companies.per_page ,
                    page : data.page ? data.page : sto.state.list.page.now
                }
                sto.commit('listPageUpdate',page)
                switch(data.type){
                    case 'contract' :
                    break;
    
                    case 'company' :
                    break;
    
                    case 'issuse' :
                    break;
    
                    default:
                        exDataHeaer.push(
                            {name:'업체번호',sort:true,xs:false,btn:false},
                            {name:'업체',sort:true,xs:true,btn:false},
                            {name:'담당자',sort:true,xs:false,btn:false},
                            {name:'계약자',sort:true,xs:false,btn:false},
                            {name:'건수	계약',sort:true,xs:false,btn:false},
                            {name:'계약상태',sort:true,xs:false,btn:false},
                            {name:'관리',sort:true,xs:false,btn:false},
                        );
                        for(let i = 0; i <  res.data.companies.data.length; i++){
                            const companies = res.data.companies.data[i]
                            exDataBody.push({
                                com_idx: companies.com_idx,
                                com_name: `
                                <strong>상호명:</strong> ${companies.com_name} <br/>
                                <strong>대표번호:</strong> ${companies.com_hp}
                                `,
                                com_maketer            : `
                                    <strong>담당자명:</strong> 담당자명 <br/>
                                    <strong>연락처:</strong> 010-0000-0000 <br/>
                                    <strong>E-mail:</strong> test@mail.com <br/>
                                `,
                                com_md :'null',
                                cam_md :'null',
                                cam_status :'null',
                                btn: [
                                    {action:'viewcompany',text:'계약추가',id:companies.com_idx},
                                    {action:'viewcompany',text:'업체수정',id:companies.com_idx},
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