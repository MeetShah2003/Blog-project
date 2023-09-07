import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const blogData=(e)=>{
    e.preventDefault();
    let blog={
        title:document.getElementById("title").value,
        category:document.getElementById("category").value,
        img:document.getElementById("img").value,
        description:document.createElement("description").value
    };

    fetch(`http://localhost:1020/blog`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(blog)
    });
};


document.getElementById("form").addEventListener("submit",blogData);