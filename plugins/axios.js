/*
if (process.server) {
}
if (process.client) {
}

export default function({$axios, redirect}){
    $axios.onRequest(config=>{
            console.log("Making Request to "+config.url)
    })    

    $axios.onError(error=>{
        const code = parseInt(error.response && error.response.status)
        console.log('error code :'+code)
    })


}
*/


