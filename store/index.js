//const cookieparser = process.server ? require('cookieparser') : undefined
//sote control only dev
//vuex 

export default {
    state: {
        login : false,
        authorization : '',
        memberInfo : {},
        query : {},
        title : '',
        $menu : [{"icon":"mdi-apps","title":"\ub300\uc2dc\ubcf4\ub4dc","to":"\/","active":false},{"icon":"mdi-home","title":"\ub9c8\uc774\ud398\uc774\uc9c0","to":"\/Home","active":false},{"code":"600100","title":"\uacc4\uc57d\uad00\ub9ac","to":"\/Contract","icon":"mdi-file-document-edit-outline","active":false,"dep2":[{"code":"600100","title":"\uacc4\uc57d\uad00\ub9ac","to":"\/Contract","icon":"mdi-file-document-edit-outline","active":false},{"code":"600110","title":"\uc5c5\uccb4\uad00\ub9ac","to":"\/Company","icon":"mdi-file-document-edit-outline","active":false}]},{"code":"600200","title":"\ucea0\ud398\uc778\uad00\ub9ac","to":"\/Campaign","icon":"mdi-text-box-search-outline","active":false,"dep2":[{"code":"600200","title":"\ucea0\ud398\uc778\uad00\ub9ac","to":"\/Campaign","icon":"mdi-text-box-search-outline","active":false},{"code":"600210","title":"\uc2e0\uccad\uad00\ub9ac","to":"\/CampaignApply","icon":"mdi-text-box-search-outline","active":false},{"code":"600220","title":"\ub9ac\ubdf0\uad00\ub9ac","to":"\/Review","icon":"mdi-text-box-search-outline","active":false},{"code":"600230","title":"\uc774\uc288\uad00\ub9ac","to":"\/Issue","icon":"mdi-text-box-search-outline","active":false}]},{"code":"600300","title":"\ud68c\uc6d0\uad00\ub9ac","to":"\/Member","icon":"mdi-account-search","active":false,"dep2":[{"code":"600300","title":"\ud68c\uc6d0\uad00\ub9ac","to":"\/Member","icon":"mdi-account-search","active":false},{"code":"600330","title":"\uc601\uc5c5\uc790\uad00\ub9ac","to":"\/Marketer","icon":"mdi-account-search","active":false}]},{"code":"600400","title":"\uc815\uc0b0\uad00\ub9ac","to":"\/Calculate","icon":"mdi-cash-usd","active":false,"dep2":[{"code":"600400","title":"\uc815\uc0b0\uad00\ub9ac","to":"\/Calculate","icon":"mdi-cash-usd","active":false},{"code":"600410","title":"\ud658\uae09\uc2e0\uccad\uad00\ub9ac","to":"\/Refunds","icon":"mdi-cash-usd","active":false},{"code":"600420","title":"\ud3ec\uc778\ud2b8\uad00\ub9ac","to":"\/Point","icon":"mdi-cash-usd","active":false}]},{"code":"600500","title":"\ud1b5\uacc4","to":"\/BusinessOwner","icon":"mdi-table-large","active":false,"dep2":[{"code":"600500","title":"\ud1b5\uacc4","to":"\/BusinessOwner","icon":"mdi-table-large","active":false}]}]
      },
      mutations: {
        login(state,TOKEN){
          state.authorization = TOKEN
          state.login = true
        },
        logout(state){
          document.cookie = "PHPSESSID="
          state.login = false
        },
        memberInfo(state,info){
          state.memberInfo = info;
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
        async TEST(sto){
          console.log('test')
        },
        async LOGIN(sto,data){
          await sto.dispatch('loading/SET_LOADING','로그인중입니다.')
          await this.$axios({
            method: 'POST',
            url: 'auth/login',
            data: data,
          }).then(res=>{
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
            console.log('err')
          })
        },
        async LOGOUT(sto){
          await sto.dispatch('loading/SET_LOADING','로그아웃중입니다.')
          await this.$axios({
            method: 'POST',
            url: 'auth/logout',
            headers: {
              'Authorization':sto.state.authorization,
            }
          }).then(res=>{
            console.log(res);
            if(res.status == 204){
              sto.commit('logout')
              location.reload()
            }
          }).catch(err=>{
            console.log(err)
          })
        },
        async MEMBER_INFO(sto){
          let state = false
          await this.$axios({
            method: 'POST',
            url: 'auth/user',
            headers: {
              'Authorization' : sto.state.authorization,
              "Content-Type"  : "application/x-www-form-urlencoded",
              "Accept"        : "application/json",
            }
          }).then(res=>{
            console.log('err')
            if(res.data.isAuthenticated){
              sto.commit('memberInfo',res.data.user)
              state = true
            }
          }).catch(err=>{
            sto.commit('logout')
            console.log(sto);
          })

          state = true
          
          return state
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
        },

      },
      modules: {
      }
}