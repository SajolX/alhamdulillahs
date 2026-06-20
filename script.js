function showMsg(){
document.getElementById("msg").innerText =
"Hello Babuu 😄 Your website is working perfectly!";
}

function toggleMenu(){
let menu = document.getElementById("menu");

if(menu.style.display === "flex"){
menu.style.display = "none";
}else{
menu.style.display = "flex";
}
}
