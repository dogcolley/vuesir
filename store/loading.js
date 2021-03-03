export default {
    state:{
      loading : false,
      loadingTxt : '페이지를 로딩중입니다.',
    },
    mutations: {
        loadingStart(state,text){
            if(text)
              state.loadingTxt = text
            else 
              state.loadingTxt = '페이지를 로딩중입니다.'
      
            state.loading = true
          },
        loadingEnd(state){
            state.loading = false
        },
    },
    actions: {
      SET_LOADING(sto,text){
        sto.commit("loadingStart",text)
      },
      END_LOADING(sto,data){
        sto.commit("loadingEnd")
      }
    }
}