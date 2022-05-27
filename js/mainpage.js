//javascript
document.addEventListener("DOMContentLoaded", function(){
var nav_links = document.getElementById("nav_Links");
document.getElementById("solid1").addEventListener("click",function() {hideMenu()});
document.getElementById("solid2").addEventListener("click",function() {showMenu()});

function showMenu(){
    nav_links.style.right = "0";

}
function hideMenu(){
    nav_links.style.right = "-200px";
}

})
