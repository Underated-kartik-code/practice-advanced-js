let pr = new Promise((resolve, reject) => {
    console.log("Checking flow of promises...")
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10)
        if (rn>=5) resolve("Resolve with "+rn)
            else reject("Rejected with "+rn)
    }, 3000);
})

pr
.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
})