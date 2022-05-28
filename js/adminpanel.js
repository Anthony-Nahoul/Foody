//JS for ADMIN PANEL
// let toggle = document.getElementById('#toggle');
// let navigation = document.getElementById('#navigation');
// let main = document.getElementById('#main');

// toggle.onclick = function(){
//     navigation.classList.toggle('active');
// }

// this function will display the users table on menu users click
let users = document.getElementById("idusers");
let usersbtn = document.querySelector("#menu-users");

usersbtn.addEventListener("click", function(){
    users.style.display = "block";
})
// this function will display the reviews table on menu reviews click
let reviewsbtn = document.querySelector('.reviewbtn');
let reviews = document.querySelector('.list-reviews');
reviewsbtn.addEventListener("click", function(){
    reviews.style.display = 'block';
})

let menuitems = document.querySelectorAll(".navigation ul li");
for(let item = 0; item < menuitems.length; item++){
    menuitems[item].onclick = function(){
        this.style.backgroundColor = "var(--white)";
        this.querySelector('a').style.color = "var(--bordeau)";
    }
}

