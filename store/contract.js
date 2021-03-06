export default {
    state:{
        name:'contract',
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
        info:{},
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
                url: 'contract',
                params :option,
                headers: {
                    'Authorization' : token,
                    "Content-Type"  : "application/x-www-form-urlencoded",
                    "Accept"        : "application/json",
                }
            }).then(res=>{
                console.log(res)
                const page = {
                    last_page : res.data.contracts.last_page ,
                    per_page  : res.data.contracts.per_page ,
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
                            {name:'업체명',sort:true,xs:false,btn:false},
                            {name:'계약상품',sort:true,xs:false,btn:false},
                            {name:'계약번호',sort:true,xs:false,btn:false},
                            {name:'회원명',sort:true,xs:false,btn:false},
                            {name:'가격',sort:true,xs:false,btn:false},
                            {name:'결제상태',sort:true,xs:false,btn:false},
                            {name:'담당자',sort:true,xs:false,btn:false},
                            {name:'소속',sort:true,xs:false,btn:false},
                            {name:'모집인원',sort:true,xs:false,btn:false},
                            {name:'캠페인수',sort:true,xs:false,btn:false},
                            {name:'이슈관리',sort:true,xs:false,btn:false},
                            {name:'관리',sort:true,xs:false,btn:false},
                        );
                        for(let i = 0; i <  res.data.contracts.data.length; i++){
                            const contract = res.data.contracts.data[i]
                            exDataBody.push({
                                com_name: 'null',
                                ctr_prd_name: contract.ctr_prd_name,
                                ctr_idx: contract.ctr_idx,
                                mb_id: contract.mb_id,
                                ctr_price: contract.ctr_price,
                                ctr_pay_status: contract.ctr_pay_status,
                                mb_id_saler: contract.mb_id_saler,
                                trm_group: 'null',
                                ctr_num: 'null',
                                cam_cnt: 'null',
                                ius_cnt: 'null/null',
                                btn: [
                                    {action:'viewcompany',text:'계약관리',id:contract.com_idx},
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