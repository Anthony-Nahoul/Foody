//toggle user dropdown on profile picture click
let profilepicture=document.querySelector('.img-profile');
profilepicture.addEventListener('click',toggleDropdown);
function toggleDropdown(){
    let userdropdown=document.querySelector('.user-dropdown');
    userdropdown.classList.toggle('hide');
}
var nav_links = document.getElementById("nav_Links");
document.getElementById("solid1").addEventListener("click",function() {hideMenu()});
document.getElementById("solid2").addEventListener("click",function() {showMenu()});

function showMenu(){
    nav_links.style.right = "0";
}
function hideMenu(){
    nav_links.style.right = "-200px";
}
let logout_button1 = document.getElementById("logout_button1");

logout_button1.addEventListener("click",function(){
    console.log("clicked");
    localStorage.setItem("id","logged out");
});
let logout_button2 = document.getElementById("logout_button2");

logout_button2.addEventListener("click",function(){
    console.log("clicked");
    localStorage.setItem("id","logged out");
});