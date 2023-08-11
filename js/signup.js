// document.getElementById("form").addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let username=document.getElementById("name").value;
//     let mono=document.getElementById("mono").value;
//     let email=document.getElementById("email").value;
//     let pass=document.getElementById("passwd").value;
   
//    let userpattern="^[A-Za-z][A-Za-z0-9_]{7,29}$";
//    let monopattern=/^[0-9]{10}/;
//    let emailpattern="^[a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
//    let passpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
   
//    if(userpattern.test(username)){
//        document.getElementById("usererr").innerHTML="";
//     }
//     else{
//         document.getElementById("usererr").innerHTML="Enter valid Username";
//     }
//     if(monopattern.test(mono)){
//         document.getElementById("monoerr").innerHTML="";
//     }
//     else{
//         document.getElementById("monoerr").innerHTML="Enter valid MobileNo";
//     }
//     if(emailpattern.test(email)){
//         document.getElementById("emailerr").innerHTML="";
//     }
//     else{
//         document.getElementById("emailerr").innerHTML="Enter valid Email ID";
//     }
//     if(passpattern.test(pass)){
//         document.getElementById("passerr").innerHTML="";
//     }
//     else{
//         document.getElementById("passerr").innerHTML="Enter valid Password";
//     }
    
//     if(userpattern.test(username) && monopattern.test(mono) && emailpattern.test(email) && passpattern.test(pass)){
//         window.location.href="../html/index.html";
//     }
//     let register={
//         username:document.getElementById("name").value,
//         mono:document.getElementById("mono").value,
//         email:document.getElementById("email").value,
//         pass:document.getElementById("passwd").value
//     }
//     console.log(register);
    
//     fetch("http://localhost:8090/register",{
//         method:"POST",
//         headers:{"Content-Type":"application-json"},
//         body:JSON.stringify(register)
//     })
//     .then((res)=>res.json())
//     .then((data)=>console.log(data));
// });