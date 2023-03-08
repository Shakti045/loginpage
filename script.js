let signin=document.getElementById("Signin")
let signout=document.getElementById("Signup")
document.getElementById("sup").addEventListener("click",()=>{
         signin.classList.add("helper")
         signout.classList.add("helper1")
           console.log(44);
})
document.getElementById("sin").addEventListener("click",()=>{
         signin.classList.remove("helper")
         signout.classList.remove("helper1")
})


window.onkeyup=function(e){
  if(e.keyCode==13){
    let val=document.getElementById("data")
    let value=val.value

    if(value!="" && value!=" "){
       let link="https://www.google.com/search?q="+value+ "&oq=+value"+"&aqs=chrome.3.69i60j69i57j0i131i433i512l3j0i433i512j69i60l2.2546j0j7&sourceid=chrome&ie=UTF-8"
       location.href=link
       
    }
  }
}


document.getElementById("mobilesearch").addEventListener("click",()=>{
    let val=document.getElementById("data")
    let value=val.value

    if(value!="" && value!=" "){
       let link="https://www.google.com/search?q="+value+ "&oq=+value"+"&aqs=chrome.3.69i60j69i57j0i131i433i512l3j0i433i512j69i60l2.2546j0j7&sourceid=chrome&ie=UTF-8"
       location.href=link
       
    }
  
})
