function promiseAll(promises){
    return new Promise((resolve,reject)=>{
        if(promises.length===0){
            return resolve([])
        }
        let result=[]
        let completed=0
        promises.forEach((promise,index)=>{
            Promise.resolve(promise)
            .then(value=>{
                result[index]=value
                completed++
                if(completed===promises.length){
                    resolve(result)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
}