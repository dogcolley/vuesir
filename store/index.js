//const cookieparser = process.server ? require('cookieparser') : undefined
//sote control only dev
//vuex 

export default {
    state: {
        login : false,
        loginToken : '',
        member : {},
        query : {},
        title : '',
        $menu : [{"icon":"mdi-apps","title":"\ub300\uc2dc\ubcf4\ub4dc","to":"\/","active":false},{"icon":"mdi-home","title":"\ub9c8\uc774\ud398\uc774\uc9c0","to":"\/Home","active":false},{"code":"600100","title":"\uacc4\uc57d\uad00\ub9ac","to":"\/Contract","icon":"mdi-file-document-edit-outline","active":false,"dep2":[{"code":"600100","title":"\uacc4\uc57d\uad00\ub9ac","to":"\/Contract","icon":"mdi-file-document-edit-outline","active":false},{"code":"600110","title":"\uc5c5\uccb4\uad00\ub9ac","to":"\/Company","icon":"mdi-file-document-edit-outline","active":false}]},{"code":"600200","title":"\ucea0\ud398\uc778\uad00\ub9ac","to":"\/Campaign","icon":"mdi-text-box-search-outline","active":false,"dep2":[{"code":"600200","title":"\ucea0\ud398\uc778\uad00\ub9ac","to":"\/Campaign","icon":"mdi-text-box-search-outline","active":false},{"code":"600210","title":"\uc2e0\uccad\uad00\ub9ac","to":"\/CampaignApply","icon":"mdi-text-box-search-outline","active":false},{"code":"600220","title":"\ub9ac\ubdf0\uad00\ub9ac","to":"\/Review","icon":"mdi-text-box-search-outline","active":false},{"code":"600230","title":"\uc774\uc288\uad00\ub9ac","to":"\/Issue","icon":"mdi-text-box-search-outline","active":false}]},{"code":"600300","title":"\ud68c\uc6d0\uad00\ub9ac","to":"\/Member","icon":"mdi-account-search","active":false,"dep2":[{"code":"600300","title":"\ud68c\uc6d0\uad00\ub9ac","to":"\/Member","icon":"mdi-account-search","active":false},{"code":"600310","title":"\uc2a4\ud398\uc15c\ud68c\uc6d0\uad00\ub9ac","to":"\/VIP","icon":"mdi-account-search","active":false},{"code":"600320","title":"\ube14\ub799\ud68c\uc6d0\uad00\ub9ac","to":"\/BlackList","icon":"mdi-account-search","active":false},{"code":"600330","title":"\uc601\uc5c5\uc790\uad00\ub9ac","to":"\/Marketer","icon":"mdi-account-search","active":false}]},{"code":"600400","title":"\uc815\uc0b0\uad00\ub9ac","to":"\/Calculate","icon":"mdi-cash-usd","active":false,"dep2":[{"code":"600400","title":"\uc815\uc0b0\uad00\ub9ac","to":"\/Calculate","icon":"mdi-cash-usd","active":false},{"code":"600410","title":"\ud658\uae09\uc2e0\uccad\uad00\ub9ac","to":"\/Refunds","icon":"mdi-cash-usd","active":false},{"code":"600420","title":"\ud3ec\uc778\ud2b8\uad00\ub9ac","to":"\/Point","icon":"mdi-cash-usd","active":false}]},{"code":"600500","title":"\ud1b5\uacc4","to":"\/BusinessOwner","icon":"mdi-table-large","active":false,"dep2":[{"code":"600500","title":"\ud1b5\uacc4","to":"\/BusinessOwner","icon":"mdi-table-large","active":false}]},{"code":"600600","title":"SMS\uad00\ub9ac","to":"\/Sms","icon":"mdi-message-processing","active":false,"dep2":[{"code":"600600","title":"SMS\uad00\ub9ac","to":"\/Sms","icon":"mdi-message-processing","active":false}]}]
      },
      mutations: {
        login(state,TOKEN){
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
              const cookie = {
                name : 'PHPSESSID',
                value : res.data.accessToken,
                expires : 'expires'
              }
              sto.commit('login',res.data.accessToken)
              sto.dispatch("SET_COOKIE",cookie)
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
          //alert(sto.state.loginToken);
          await this.$axios({
            method: 'POST',
            url: 'auth/user',
            headers: {
              'Authorization' : sto.state.loginToken,
              "Content-Type"  : "application/x-www-form-urlencoded",
              "Accept"        : "application/json",
              /*"Cookie"        : `PHPSESSID=${sto.state.loginToken};`*/
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
          document.cookie = data.name+ "=" + escape( data.value ) + "; path=/; expires=" +  ( data.expires ? data.expires : todayDate.toGMTString()) + ";";
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