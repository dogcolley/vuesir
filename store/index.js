//const cookieparser = process.server ? require('cookieparser') : undefined
//sote control only dev
//vuex 
const BASEURL = 'http://test2.seoulouba.kr/';

export default {
    state: {
        $auth : {
          $login : 'login'
        },
        $g5 :{},
        $config :{},
        $menu : {},
        $view :[],
        $list : [],
        $wirte : [],
        $baseURL : `${BASEURL}plugin/seoba3/ajax_loading.php`,
        $url : {},
        member : {},
        loadingTxt : '페이지를 로딩중입니다.',
        loading : false,
        login : false,
        loginToken : '',
        query : {},
        title : ''
      },
      getters:{
     
      },
      mutations: {
        testConsole(){
          console.log('test');
        },
        addModalList(state, data) {
          state.modalList.push(data)
        },
        deleteModalList(state, data) {
          //state.modalList.splice(data, 1)
          state.modalList.shift()
        },
        loginTry(state,data){
            state.$url = data.base_url
            if(data.state)
              state.login = true
            else if(typeof document !== undefined){
              state.login = false
              document.cookie = "accessToken="
            }else{
              state.login = false
            }
        },
        loadingStart(state,text){
          if(text)
            state.loadingTxt = text
          else 
            state.loadingTxt = '페이지를 로딩중입니다.'
    
          alert(state.loading)
          state.loading = true
        },
        loadingEnd(state){
          state.loading = false
        },
        login(state,TOKEN){
          document.cookie = "accessToken="+TOKEN
          state.loginToken = TOKEN
          state.login = true
        },
        logout(state){
          document.cookie = "accessToken="
          state.loginToken = ''
          state.login = false
        },
        querySet(state){
          const url = document.location.href;
          let qs = url.substring(url.indexOf('?') + 1).split('&')
          const result = []
          for(let i = 0;i < qs.length; i++){
              qs[i] = qs[i].split('=')
              result[qs[i][0]] = decodeURIComponent(qs[i][1])
          }
          state.query = result
        },
        setMenu(state,data){
          state.$menu = data ? data : [] 
        },
        setTitle(state,tit){
          state.title = tit;
        }
      },
      actions: {
        async TESTING(sto){
            sto.commit('sms/test_sms_add')
        },
        async LOGIN(sto,data){
          await this.$axios({
            method: 'POST',
            url: sto.state.$url.login,
            data: data,
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then(res=>{
            console.log(res)
            if(res.data.state){
              sto.commit('login',res.data.TOKEN)
              sto.dispatch('CHECK_LODDING')
            }
          }).catch(err=>{
            console.log(err)
          })
        },
        async LOGOUTOUT(sto){
          this.$router.push({ name: 'Login'})
          sto.commit('logout')
        },
        async SERVER_LODING(sto){
          console.dir(this);
        },
        async CHECK_LODDING(sto){
          if(typeof window == 'undefined'){
          }
          else{
            await this.$axios({
              method: 'POST',
              url: sto.state.$baseURL,
              headers: { 
                  'Authorization': sto.state.loginToken,
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"
              },
            }).then(res=>{
              sto.commit("querySet")
              sto.commit("loginTry",res.data)
              sto.commit('setMenu',res.data.menu)
              sto.commit("loadingEnd")
              console.log(res);
            }).catch(err=>{
              console.log(err)
            })
          }
        },
        async GET_LATEST(sto,data){
          const latest = new Object()
          
          if(data.mode == 'board'){
            //data.board 
            await this.$axios({
              method: 'POST',
              url: sto.state.$baseURL,
              headers: { 
                  'Authorization': sto.state.loginToken,
                  "Content-Type": "application/x-www-form-urlencoded",
                  "Accept": "application/json"
              },
            })
          }else if(data.mode == 'campagin'){

          }else if(data.mode == 'contract'){

          }

          return latest
        },
      
        async SET_COOKIE(sto,data){    
          const todayDate = new Date();
          todayDate.setHours( 24 );
          document.cookie = data.name+ "=" + escape( data.value ) + "; path=/; expires=" +   todayDate.toGMTString() + ";";
        },

        async GET_COOKIE(sto,data){
          let Found = false
          let start, end
          let i = 0
          
          while(i <= document.cookie.length) {
              start = i
              end = start + data.name.length
              
              if(document.cookie.substring(start, end) == data.name) {
                Found = true
                break 
              }
              i++
          }
          
          if(Found == true) {
            start = end + 1
            end = document.cookie.indexOf(";", start)
            if(end < start)
              end = document.cookie.length
            return document.cookie.substring(start, end)
          }
          
          return ""
        }

      },
      modules: {



      }
}