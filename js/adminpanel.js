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

let restaurantsbtn = document.querySelector('.restaurantsbtn');
let restaurants = document.querySelector('.list-restaurants');
restaurantsbtn.addEventListener("click", function(){
    restaurants.style.display = 'block';
})


// if (users.style.display == "block"){
//     reviews.style.display = 'none';
//     restaurants.style.display = 'none';
// }


let menuitems = document.querySelectorAll(".navigation ul li");
for(let item = 0; item < menuitems.length; item++){
    menuitems[item].onclick = function(){
        // defineActive(menuitems[item]);
        // console.log(menuitems[item]);
        // if (menuitems[item].classList.contains("active")){
            
        // }
        this.style.backgroundColor = "var(--white)";
        this.querySelector('a').style.color = "var(--bordeau)";
    }
}
// this function will define which button is active and deselect others
function defineActive(target){
    menuitems.forEach((btn) => {
        if (btn == target){
            btn.classList.add("active");
        }
        else {
            btn.classList.remove("active");
        }
    })
}
