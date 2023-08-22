import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();


const blogPost=((e)=>{
    e.preventDefault();
    let blogData={
        title:document.getElementById("title").value,
        category:document.getElementById("category").value,
        img:document.getElementById("img").value,
        description:document.getElementById("description").value
    };

    fetch(`http://localhost:1020/blog`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blogData)
    });
});


document.getElementById("form").addEventListener("submit",blogPost);