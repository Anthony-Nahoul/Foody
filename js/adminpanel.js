//JS for ADMIN PANEL
let isClicked = false;
let users = document.getElementById("idusers");
let usersbtn = document.querySelector("#menu-users");
if(isClicked == false){
    usersbtn.addEventListener("click", usersClicked);
    isClicked=true;
}
else{
    usersbtn.removeEventListener("click", usersClicked);
    // isClicked = false;
}


function usersClicked(){
    users.style.display = 'block';
    usersbtn.style.backgroundColor = "var(--white)";
    usersbtn.querySelector('a').style.color = "var(--bordeau)";
}
// this function will display the reviews table on menu reviews click
let reviewsbtn = document.querySelector('.reviewbtn');
let reviews = document.querySelector('.list-reviews');
reviewsbtn.addEventListener("click", reviewsClicked);
function reviewsClicked(){
    reviews.style.display = 'block';
    reviewsbtn.style.backgroundColor = "var(--white)";
    reviewsbtn.querySelector('a').style.color = "var(--bordeau)";
}

let restaurantsbtn = document.querySelector('.restaurantsbtn');
let restaurants = document.querySelector('.list-restaurants');
restaurantsbtn.addEventListener("click", restaurantsClicked);

function restaurantsClicked(){
    restaurants.style.display = 'block';
    restaurantsbtn.style.backgroundColor = "var(--white)";
    restaurantsbtn.querySelector('a').style.color = "var(--bordeau)";
}


// if (users.style.display == "block"){
//     reviews.style.display = 'none';
//     restaurants.style.display = 'none';
// }


// let menuitems = document.querySelectorAll(".navigation ul li");
// for(let item = 0; item < menuitems.length; item++){
//     menuitems[item].onclick = function(){
//         // defineActive(menuitems[item]);
//         // console.log(menuitems[item]);
//         // if (menuitems[item].classList.contains("active")){
            
//         // }
//         this.style.backgroundColor = "var(--white)";
//         this.querySelector('a').style.color = "var(--bordeau)";
//     }
// }
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
