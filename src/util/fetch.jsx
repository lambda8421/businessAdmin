export function getData(url) {
    let result = fetch(url,{
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain' +
            ',*/*'
        }
    });

    return result.then(req=>req.json());
}

export function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // *manual, follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }).then(res => res.json()) // parses response to JSON
      .then(res=>{
            if(10 === res.status){
                doLogin();
            }else {
                return res;
            }
      })
}


let verify = (res)=> {
    if(0 === res.status){
        typeof resolve === 'function' && resolve(res.data, res.msg);
    }
    // 没有登录状态，强制登录
    else if(10 === res.status){
        doLogin();
    }
    else{
        typeof reject === 'function' && reject(res.msg || res.data);
    }
}

function doLogin(){
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname);
}


