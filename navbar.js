async function loadNavBar(){
    await fetch("navbar.html")
        .then((response)=> response.text())
        .then((data)=>{
            document.getElementById('nav-sec').innerHTML=data;
        });
    }
window.onload=loadNavBar;