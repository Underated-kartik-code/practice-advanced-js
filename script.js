let ask = prompt("tell me your id : -")

function getuser(id,cb){
    console.log("user fetching")
    setTimeout(() => {
        if(id == 100) {
            console.log("User Found !!")
            cb({id:100,
            username: "Kartik",
            password: "******"
        },{
            id:100,
            username: "Aartik",
            password: "******"
        },
        {
            id:100,
            username: "amartik",
            password: "******"
    })
    }else 
            console.log("NO user Found")
    }, 2000);
}
function getposts(username,cb){
    console.log("details fetching...")
    setTimeout(() => {
        if (username === "Kartik"){
            console.log("username matched Post as follows :")
            cb({
                "post1":1234,
                "post2":5678,
                "post2":9876,
                "post4":5432,
                "post5":1111
            })
        }else{
            console.log("invalid detail");
        }
    }, 2000);
}

let fun = getuser(ask,function(data){
    console.log(data)
    getposts(data.username,function(posts){
        console.log(posts)
    })
})