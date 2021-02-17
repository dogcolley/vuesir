export default function ({app, store, redirect, route,query,req,res,localStorage}) {
    if(typeof window == 'undefined'){

        let cookie =  [];
        let Token = ''
        let basePage;  

        if(req.headers.cookie)
          cookie = req.headers.cookie.split(';')
        else 
          cookie = [];
        
        for(let i = 0; i < cookie.length;i++){
          let Arr = cookie[i].split('=')
          if(Arr[0].replace(" ","") == 'accessToken'){
            Token = Arr[1]
          }
        }
  
        if(route.name !== "Login")
          basePage = route.name    
  
        if(Token == '' && route.name !== "Login"){
          store.state.login = false
          return redirect(`/Login${basePage ? '?basePage='+basePage : ''}`)
        }else if (Token){
          store.state.login = true
          store.state.loginToken = Token
          if(route.name == "Login"){
            if(basePage)
              return redirect(`/${basePage}`)
            else 
              return redirect(`/`)
          }
        }
      }else{
        const cookie = document.cookie.split(';')
        let Token = ''
        for(let i = 0; i < cookie.length;i++){
          let Arr = cookie[i].split('=')
          if(Arr[0].replace(" ","") == 'accessToken'){
            Token = Arr[1]
          }
        }
        if(route.name !== "Login"){
          if(Token == ''){
            return redirect(`/Login`)
          }else if(Token !== store.state.loginToken ){
            store.commit('logout')
            return redirect(`/Login`)
          }
        }

        
      }
  }