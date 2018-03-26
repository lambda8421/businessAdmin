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

 export function postData() {
    let result = fetch('/manage/statistic/base_count.do',{
        credentials:'include',
        headers:{
            'Accept':'application/json,text/plain' +
            ',*/*'
        }
    });

    return result.then(req=>req.json());
}


