export default {
    state:{
        name:'campaign',
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
            campaign:{
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
            state.info.campaign = data;
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
                url: 'campaign',
                params :option,
                headers: {
                    'Authorization' : token,
                    "Content-Type"  : "application/x-www-form-urlencoded",
                    "Accept"        : "application/json",
                }
            }).then(res=>{
                //console.log(res)
                const page = {
                    last_page : res.data.campaign.last_page ,
                    per_page  : res.data.campaign.per_page ,
                    page : data.page ? data.page : sto.state.list.page.now
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
                            {name:'이미지',sort:false,xs:false,btn:false},
                            {name:'캠페인',sort:true,xs:false,btn:false},
                            {name:'접수',sort:true,xs:true,btn:false},
                            {name:'신청/선정',sort:true,xs:true,btn:false},
                            {name:'리뷰',sort:true,xs:false,btn:false},
                            {name:'관리',sort:true,xs:false,btn:false},
                        );
                         
                        for(let i = 0; i <  res.data.campaign.data.length; i++){
                            const campaign = res.data.campaign.data[i]
                            exDataBody.push({
                                cam_img          : `<div>이미지</div>`,
                                cam_name            : `
                                    ${campaign.cam_name} <br/>
                                    <캠페인 종류 아이콘> <br/>
                                    ${campaign.mb_id_saler} / c${campaign.cam_idx} / ${campaign.com_idx} <br/>
                                    <strong>상품명:</strong>상품명(결재상태) - 진행회차/총회차
                                `,
                                
                                cam_reg_dt          : `
                                    <strong>업체:</strong> ${campaign.mb_id_company} <br/>
                                    <strong>담당자:</strong> ${campaign.mb_id_saler} <br/>
                                    <strong>소속</strong> 소속그룹/팀 <br/>
                                    <strong>등록일</strong> ${campaign.cam_reg_dt} <br/>
                                    <strong>접수일</strong> ${campaign.cam_info_reg_dt} 
                                `,
                                cam_info         : `
                                    <strong>모집기간:</strong><br/>
                                    <strong>모집인원:</strong><br/>
                                    <strong>가선정:</strong><br/>
                                    <strong>선정일자:</strong><br/>
                                    <strong>발표일:</strong><br/>
                                    <strong>발표상태:</strong><br/>
                                `,
                                cam_review         : `
                                    <strong>기간:</strong><br/>
                                    <strong>상태:</strong><br/>
                                    <strong>리뷰수:</strong><br/>
                                `,
                                btn: [
                                    {action:'viewCampaign',text:'이슈관리',id:campaign.cam_idx},
                                    {action:'viewCampaign',text:'일정/회차',id:campaign.cam_idx},
                                    {action:'viewCampaign',text:'리포트',id:campaign.cam_idx},
                                    {action:'viewCampaign',text:'리뷰접속통계',id:campaign.cam_idx}
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