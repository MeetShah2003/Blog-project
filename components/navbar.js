const navbar=()=>{
    return`    
    <nav class="navigation max-width-1 m-auto">
        <div class="nav-left">
            <a href="#">
                <span><img src="../img/logo.png" width="150px" alt=""></span>
            </a>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="../html/blog.html">Blog</a></li>
                <li><a href="../html/addblog.html">Addblog</a></li>
                <li><a href="../html/contact.html">Contact</a></li>
            </ul>
        </div>
        <div class="nav-right">
            <button id="btn-login"><a href="html/login.html">Login</a></button>
            <button id="btn-register"><a href="html/register.html">Register</a></button>
        </div>

    </nav>
    `
}

export {navbar}