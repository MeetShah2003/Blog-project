import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


const contactUs=((e)=>{
    e.preventDefault();
    let contact={
        name:document.getElementById("name").value,
        mono:document.getElementById("mono").value,
        email:document.getElementById("email").value,
        msg:document.getElementById("msg").value   
    }
    console.log(contact);
    fetch(`http://localhost:1020/contactus`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(contact)
    });
    alert("Thank for contacting us");
    setTimeout(() => {
        window.location.href="/index.html"
    }, 1000);
});

document.getElementById("form").addEventListener("submit",contactUs);