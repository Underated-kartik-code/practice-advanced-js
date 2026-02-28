function getUser(id,cb){
    console.log("User fetching....")
    setTimeout(()=>{
        cb({id:id,
        username:"kartik",
        bio:"Developer"
    })
    },3000)
}
function getorder(id,cb){
    console.log("Your order is coming...")
    setTimeout(()=>{
        cb({id:id,
            order : ['a','b','c','d']
        })
    },2000)
}
function getmoney(id,cb){
    setTimeout(()=>{
        cb({id:id,
            otp: "abcde"
        })
    },2000)
}

getUser(123,function(data){
    console.log(data)

    getorder(123,function(order){
        console.log(order)

        getmoney(123,function(money){
            console.log("Please verify your otp...")
            setTimeout(()=>{
                let input=prompt("give me a captcha");

                if(money.otp==input)console.log("verified please pay")
                else console.log("its fake")
            },2000);
        })
    })
})