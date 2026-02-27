function profile (username,cb){
    console.log("Fetching profile... ")
    setTimeout(()=>{
        cb({id : 123,
            username : username,
            Email : "abc@mail.com",
            age : 20
        })
    },2000);
}
function postlao (id ,cb){
    console.log("Fetching posts...")
    setTimeout(()=>{
        cb({id:id,
            posts : [1,2,3,4,5,6,7]
        })
    },2000)
}

function savedpost (id ,cb){
    console.log("fetching savedpost...")
    setTimeout(()=>{
        cb({id:id,
            saved:["hello","hii","good"]
        })
    },3000)
}
 
profile("kartik",function(data){
    console.log(data);

    postlao(data.id,function(posts){
        console.log(posts)

        savedpost(data.id,function(saved){
            console.log(saved)
        })
    })   
})