function jock(){
    var list=document.getElementById("list")
    var list2=document.getElementById("list2")
    var jo=list.children[0]
    var pun=list2.children[0]
    var data=fetch("https://official-joke-api.appspot.com/random_joke")
    data.then((result)=>{
        return result.json()
    }).then((response)=>{
        const newjock=document.createTextNode(response.setup)
        const newpunch=document.createTextNode(response.punchline)
        jo.replaceChild(newjock,jo.childNodes[0]);
        pun.replaceChild(newpunch,pun.childNodes[0]);
    })

}