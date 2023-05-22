let mobile = document.getElementById("mobile");
let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
mobile.style.display = "none";
menu.addEventListener("click",function(){
    mobile.style.display = "block";
})
cross.addEventListener("click",function(){
    mobile.style.display = "none";
})