export default {
    state:{
        name:'member',
        config:{},
        list:{},
        searchQuery:{},
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
        //회원정보 요청하기

        },
        SET_UPDATE(sto,data){
        //회원정보 업데이트

        },
        SET_LIST_UPDATE(sto,data){
        //리스트 상태변화
            sto.dispatch('GET_LIST')

        },
        SET_LIST_DELETE(sto,data){
        //리스트 삭제
            sto.dispatch('GET_LIST')

        
        },
    }
}