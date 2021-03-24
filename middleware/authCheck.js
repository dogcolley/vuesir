export default function ({app, store, redirect, route,query,req,res,localStorage,$axios}) {
      
      if(process.server){
        let cookie =  [];
        let Token = ''
        let basePage;  

        if(req.headers.cookie)
          cookie = req.headers.cookie.split(';')
        else 
          cookie = [];
        
        for(let i = 0; i < cookie.length;i++){
          let Arr = cookie[i].split('=')
          if(Arr[0].replace(" ","") == 'PHPSESSID'){
            Token = Arr[1]
          }
        }

        if(route.name !== "Login")
          basePage = route.name   

        if(Token == '' && route.name !== "Login" ){
          store.state.login = false
          return redirect(`/Login${basePage ? '?basePage='+basePage : ''}`)
        }else if (Token){
          store.state.login = true
          store.state.authorization = Token
          if(route.name == "Login"){
            if(basePage)
              return redirect(`/${basePage}`)
            else 
              return redirect(`/`)
          }
        }
      }

      
      if(process.client){
        const cookie = document.cookie.split(';')
        let Token = ''
        for(let i = 0; i < cookie.length;i++){
          let Arr = cookie[i].split('=')
          if(Arr[0].replace(" ","") == 'PHPSESSID'){
            Token = Arr[1]
          }
        }

        store.dispatch('MEMBER_INFO').then( (state)=>{
          if(route.name !== "Login" && (!state || Token == ''))
            return redirect(`/Login`)
        })
         
      }
}