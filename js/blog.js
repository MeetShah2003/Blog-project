import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML=navbar();

let blog=[];

const findInput=()=>{
    let value=document.getElementById("inputValue").value;
    fetch(`http://localhost:1020/blog`)
    .then((res)=>res.json())
    .then((data)=>{
        let finalData=blog.filter((item)=>item.category.match(value));
        uimaker(finalData);
    });
};

document.getElementById("inputValue").addEventListener("keypress",findInput);
document.getElementById("btn-search").addEventListener("click",findInput);
document.getElementById("inputValue").addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        findInput();
    }
});


const uimaker=(data)=>{
    document.getElementById("ui").innerHTML="";
    data.map((item)=>{
        let img=document.createElement("img");
        img.src=item.img;
        let title=document.createElement("h2");
        title.innerHTML=item.title;
        let category=document.createElement("h3");
        category.innerHTML=item.category;
        category.style.padding="7px 0px";
        let description=document.createElement("p");
        description.innerHTML=item.description;
        let btn1=document.createElement("button");
        btn1.innerHTML=`Like <i class="fa-solid fa-thumbs-up fa-bounce"></i>`;
        btn1.setAttribute("id","btn-like");
        btn1.style.marginRight="15px";
        let btn2=document.createElement("button");
        btn2.innerHTML=`Delete <i class="fa-solid fa-trash-can fa-bounce"></i>`;
        btn2.setAttribute("id","btn-delete");
        btn2.addEventListener("click",()=>{
            fetch(`http://localhost:1020/blog/${item.id}`,{
                method:"DELETE"
            });
        });
        let div=document.createElement("div");
        div.append(img,title,category,btn1,btn2);
        div.style.padding="15px 0px";
        div.style.margin="10px 0px";
        document.getElementById("ui").append(div);
        document.getElementById("ui").style.textAlign="center";
    });
};

const findCat=(cat)=>{
    let selectCat=document.getElementById("category").value;
    fetch(`http://localhost:1020/blog?category=${cat}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(selectCat===cat){
            uimaker(data);
        };
    });
};

document.getElementById("category").addEventListener("change",()=>getData());
document.getElementById("category").addEventListener("change",()=>findCat("sports"));
document.getElementById("category").addEventListener("change",()=>findCat("ecommerce"));
document.getElementById("category").addEventListener("change",()=>findCat("news"));
document.getElementById("category").addEventListener("change",()=>findCat("arts"));
document.getElementById("category").addEventListener("change",()=>findCat("photography"));
document.getElementById("category").addEventListener("change",()=>findCat("socialmedia"));
document.getElementById("category").addEventListener("change",()=>findCat("tech"));

const getData=async()=>{
    fetch(`http://localhost:1020/blog`)
    .then((res)=>res.json())
    .then((data)=>{
        blog=data;
        uimaker(data);
    });
};
getData();