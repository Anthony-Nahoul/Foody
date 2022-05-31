//JS for ADMIN PANEL
getRestaurants();
getReviews();
addUsers();
let users = document.getElementById("idusers");
let usersbtn = document.querySelector("#menu-users");
usersbtn.addEventListener("click", usersClicked);
// this function will display the reviews table on menu users click and hide the other tables
function usersClicked(){
    reviews.style.display = "none";
    restaurants.style.display = "none";
    reviewsbtn.style.backgroundColor = "var(--bordeau)";
    reviewsbtn.querySelector('a').style.color = "var(--white)";
    restaurantsbtn.style.backgroundColor = "var(--bordeau)";
    restaurantsbtn.querySelector('a').style.color = "var(--white)";
    users.style.display = 'block';
    usersbtn.style.backgroundColor = "var(--white)";
    usersbtn.querySelector('a').style.color = "var(--bordeau)";
    
}

// this function will display the reviews table on menu reviews click and hide the other tables
let reviewsbtn = document.querySelector('.reviewbtn');
let reviews = document.querySelector('.list-reviews');
reviewsbtn.addEventListener("click", reviewsClicked);
function reviewsClicked(){
    users.style.display = "none";
    restaurants.style.display = "none";
    reviews.style.display = 'block';
    usersbtn.style.backgroundColor = "var(--bordeau)";
    usersbtn.querySelector('a').style.color = "var(--white)";
    restaurantsbtn.style.backgroundColor = "var(--bordeau)";
    restaurantsbtn.querySelector('a').style.color = "var(--white)";
    reviewsbtn.style.backgroundColor = "var(--white)";
    reviewsbtn.querySelector('a').style.color = "var(--bordeau)";
    
}

let restaurantsbtn = document.querySelector('.restaurantsbtn');
let restaurants = document.querySelector('.list-restaurants');
restaurantsbtn.addEventListener("click", restaurantsClicked);
let addbtn = document.getElementById("addbtn");
let table_restaurants= document.querySelector('.restaurants');
let row = document.createElement('tr');
let table_head = document.getElementsByTagName('th');
// this function will display the restaurants table on menu reviews click and hide the other tables
function restaurantsClicked(){
    users.style.display = "none";
    reviews.style.display = "none";
    restaurants.style.display = 'block';
    usersbtn.style.backgroundColor = "var(--bordeau)";
    usersbtn.querySelector('a').style.color = "var(--white)";
    reviewsbtn.style.backgroundColor = "var(--bordeau)";
    reviewsbtn.querySelector('a').style.color = "var(--white)";
    restaurantsbtn.style.backgroundColor = "var(--white)";
    restaurantsbtn.querySelector('a').style.color = "var(--bordeau)";
    
}


//took the inner html of the table and added the format needed to its restaurant
function addRestaurantRow() {
  table_restaurants.innerHTML += `<tr>
    <td></td>
    <td><input name="name[]" type='text'/></td>
    <td><input name="description[]" type='text'/></td>
    <td><input name="piclink[]" type='text'/></td>
    <td><input name="address[]" type='text'/></td>
    <td><select class="categoriesoptions" name="categories_id[]">
        <option class="categories" value= '1'></option>
        <option class="categories" value= '2'></option>
        <option class="categories" value= '3'></option>
        <option class="categories" value= '4'></option>
        <option class="categories" value= '5'></option>
    </select> </td>
    </tr>`;
  axios({
    method: "GET",
    url: "http://localhost/Foody-backend/getcategories.php",
  }).then(function (response) {
      let categorieslist = document.querySelector(".categoriesoptions");
      let categories = document.querySelectorAll(".categories");
      for(let category = 0; category<categories.length; category++){
        console.log(response.data[category]);
          categories[category].innerHTML = response.data[category]["categoryname"];
          categories[category].setAttribute("value", response.data[category]["id"]);
      }


    console.log(response.data);
  
  });
}

addbtn.addEventListener('click', addRestaurantRow);


let toggle = document.querySelector(".toggle");
let navigationbar = document.querySelector(".navigation");
toggle.addEventListener("click",showMenu);
function showMenu(){
    navigationbar.style.display = "block";
}
// get users from API
let userstable = document.querySelector(".list-users");
function addUsers(){
    axios({
        method: 'GET',
        url: 'http://localhost/Foody-backend/getusers.php',
    })
    .then(function (response) {
        console.log(response.data);
        for (let u = 0; u<response.data.length; u++){
            userstable . innerHTML += `<tr class = "row-${u}"> 
            <td>${response.data[u]["id"]}</td>
            <td>${response.data[u]["fname"]}</td>
            <td>${response.data[u]["lname"]}</td>
            <td>${response.data[u]["email"]}</td>
            <td>${response.data[u]["password"]}</td>
            <td>${response.data[u]["user_piclink"]}</td>
            <td class="given-type" contenteditable = true>${response.data[u]["type"]}</td>
            <td><button class="edituserbutton">Edit</button></td>
        </tr>`;}
        // editing type
        var editbuttons = document.querySelectorAll(".edituserbutton");
        editbuttons.forEach(function(editbutton, index){
            editbutton.addEventListener("click", function(){
                var userid = response.data[index]["id"];
                var usertype = document.querySelector(`.row-${index} .given-type`).innerHTML;
                let data = new FormData();
                data.append('id', userid);
                data.append('type', usertype);
                axios({
                    method: 'post',
                    url: 'http://localhost/Foody-backend/updateUserType.php',
                    data: data,
                })
                .then(function (response) {
                    console.log(response);
                    })
            })
        }) 
        
    }
)
}
// get reviews ffrom API
let reviewstable = document.querySelector(".reviews");

function getReviews(){
    axios({
        method: 'GET',
        url: 'http://localhost/Foody-backend/getreviews.php',
    })
    .then(function (response) {
        console.log(response.data);
        var status = "";
        for (let r = 0; r<response.data.length; r++){
            if (response.data[r]["approved"]== 0){
                status = "pending";
            }
        else
            {
                status = "approved"
            }
            reviewstable . innerHTML += `<tr>
            <td>${response.data[r]["id"]}</td>
            <td>${response.data[r]["users_id"]}</td>
            <td>${response.data[r]["restaurants_id"]}</td>
            <td>${response.data[r]["review_description"]}</td>
            <td>${status}</td>
            <td class="approved-button"><a href= ""><ion-icon name="shield-checkmark"></ion-icon></a></td>
            <td class="denied-button" ><a href= ""><ion-icon name="close"></ion-icon></a></td>
        </tr>`;
        var reviewapprovedbuttons = document.querySelectorAll(".approved-button");
        reviewapprovedbuttons.forEach(function(approve, index){
            approve.addEventListener("click", function(){
                var reviewid = response.data[index]["id"];
                let data = new FormData();
                data.append('id', reviewid);
                data.append('approved', 1);
                axios({
                    method: 'post',
                    url: 'http://localhost/Foody-backend/updateReviewStatus.php',
                    data: data,
                })
                .then(function (response) {
                    console.log(response);
                    })
            })
        })
        var reviewdeniedbuttons = document.querySelectorAll(".denied-button");
        reviewdeniedbuttons.forEach(function(deny, index){
            deny.addEventListener("click", function(){
                var reviewid = response.data[index]["id"];
                let data = new FormData();
                data.append('id', reviewid);
                axios({
                    method: 'post',
                    url: 'http://localhost/Foody-backend/deletereview.php',
                    data: data,
                })
                .then(function (response) {
                    console.log(response);
                    })
            })
        })
        
    }
    
    
    
})
}

// Get restaurants from API
let restaurantstable = document.querySelector(".restaurants");
function getRestaurants(){
    axios({
        method: 'GET',
        url: 'http://localhost/Foody-backend/getrestaurants.php',
    })
    .then(function (response) {
        console.log(response.data);
        for (let resto = 0; resto<response.data.length; resto++){
            restaurantstable.innerHTML += `<tr>
            <td>${response.data[resto]["id"]}</td>
            <td>${response.data[resto]["name"]}</td>
            <td>${response.data[resto]["description"]}</td>
            <td>${response.data[resto]["piclink"]}</td>
            <td>${response.data[resto]["address"]}</td>
            <td>${response.data[resto]["categories_id"]}</td>
        </tr>`;
    }})
    
}
