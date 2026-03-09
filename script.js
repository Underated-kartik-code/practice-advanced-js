let pr = new Promise((resolve, reject) => {
    console.log("Checking flow of async await...")
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10)
        if (rn>=5) resolve("Resolve with "+rn)
            else reject("Rejected with "+rn)
    }, 3000);
})

async function abcd(){
    try{
        let val = await pr;
        console.log(val)
    }catch(err){
        console.log(err)
    }
}

abcd();