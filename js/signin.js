document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let login={
        email:document.getElementById("email").value,
        pass:document.getElementById("passwd").value
    }
    console.log(login);
    let emailpattern="^[a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
    let passpattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

    if(emailpattern.test(login.email)){
        document.getElementById("emailerr").innerHTML="";
    }
    else{
        document.getElementById("emailerr").innerHTML="Enter valid Email ID";
    }
    if(passpattern.test(login.pass)){
        document.getElementById("passwderr").innerHTML="";
    }
    else{
        document.getElementById("passwderr").innerHTML="Enter valid password";
    }

    fetch(`http://localhost:8090/login?email=${login.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        if(data.length>0){
            for(let i=0;i<data.length;i++){
                if(data[i].login.email==email && data[i].login.pass==pass){
                    window.location.href="index.html";
                }
                else{
                    document.getElementById("notmatcherr").innerHTML="Email or password is Incorrect...!";
                }
            }
        }
        else{
            document.getElementById("notmatcherr").innerHTML="Enter Details";
        }
    });
});


let get = async()=> {

    fetch(`http://localhost:8090/login`)
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}
get()