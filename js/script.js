let nam=document.getElementById('nam');
let email=document.getElementById('email');
let btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
    if(nam.value==''&&email.value==''){
        alert('please fill the inputs')
    }
        else if(email.value.match(/./)||email.value.match(/@/)==null){
            alert('should include . and @')
        }

})

let inp=document.getElementById('inp');
let acount=document.getElementById('acount');
let btn1=document.getElementById('btn1');
let message=document.getElementById('message')

btn1.addEventListener('click',()=>{
    if(inp.value==''&&acount.value==''&&message.value==''){
        alert('please fill the inputs')
    }
 else if(acount.value.match(/./)||acount.value.match(/@/)==null){
alert('should include . and @')
    }
})

let btntop=document.getElementById('btntop');

window.onscroll=function(){
    if(document.documentElement.scrollTop>700){
        btntop.style.display='block';
    }else{
        btntop.style.display='none';
    }
}

btntop.addEventListener('click',()=>{
    window.scroll({
        top:0,
        left:0,
        behavior:"smooth"
    })
})
