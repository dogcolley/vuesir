//const cookieparser = process.server ? require('cookieparser') : undefined
//sote control only dev
//vuex 

export default {
    state: {
        login : false,
        loginToken : '',
        member : {},
        query : {},
        title : ''
      },
      mutations: {
        login(state,TOKEN){
          document.cookie = "Authorization="+TOKEN
          state.loginToken = TOKEN
          state.login = true
        },
        logout(state){
          document.cookie = "Authorization="
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
        async LOGIN(sto,data){
          await sto.dispatch('loading/SET_LOADING','로그인중입니다.')
          await this.$axios({
            method: 'POST',
            url: 'auth/login',
            data: data,
          }).then(res=>{
            console.log(res);
            if(res.status == 200){
              sto.commit('login',res.data.accessToken)
              sto.dispatch('loading/END_LOADING')
            }
          }).catch(err=>{
            console.log(err)
          })
        },
        async LOGOUT(sto){
          await sto.dispatch('loading/SET_LOADING','로그아웃중입니다.')
          await this.$axios({
            method: 'POST',
            url: 'auth/logout',
            headers: {
              'Authorization':sto.state.loginToken,
            }
          }).then(res=>{
            console.log(res);
            if(res.status == 200){
              sto.commit('logout')
            }
          }).catch(err=>{
            console.log(err)
          })
        },
      
        async MEMBER_INFO(sto){
          alert(sto.state.loginToken);
          await this.$axios({
            method: 'POST',
            url: 'auth/user',
            headers: {
              'Authorization':sto.state.loginToken,
              "Content-Type": "application/x-www-form-urlencoded",
              "Accept": "application/json"
            }
          }).then(res=>{
            console.log(res);
          }).catch(err=>{
            console.log(err)
          })
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