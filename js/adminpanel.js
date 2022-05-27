//JS for ADMIN PANEL
// let toggle = document.getElementById('#toggle');
// let navigation = document.getElementById('#navigation');
// let main = document.getElementById('#main');

// toggle.onclick = function(){
//     navigation.classList.toggle('active');
// }

let users = document.getElementById("idusers");
let usersbtn = document.querySelector("#menu-users");
console.log("haha");

usersbtn.addEventListener("click", function(){
    console.log(usersbtn);
    users.style.display = "block";
})

let menuitems = document.querySelectorAll(".navigation ul li");
for(let item = 0; item < menuitems.length; item++){
    menuitems[item].onclick = function(){
        this.style.backgroundColor = "var(--white)";
        this.querySelector('a').style.color = "var(--bordeau)";
    }
}

