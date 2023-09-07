import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let blog=[];

const uimaker=(data)=>{
    document.getElementById("ui").innerHTML="";
    data.map((item)=>{
        let img=document.createElement("img");
        img.src=item.img;
        let title=document.createElement("h2");
        title.innerHTML=item.title;
        let category=document.createElement("h3");
        category.innerHTML=item.category;
        let description=document.createElement("p");
        description.innerHTML=item.description;
        let btn1=document.createElement("button");
        btn1.innerHTML="Like"
        let btn2=document.createElement("button");
        btn2.innerHTML="Delete";
        let div=document.createElement("div");
        div.append(img,title,category,btn1,btn2);
        document.getElementById("ui").append(div);
    });
}

const getData=async()=>{
    fetch(`http://localhost:1020/blog`)
    .then((res)=>res.json())
    .then((data)=>{
        blog=data;
        uimaker(data);
    })
};
getData();