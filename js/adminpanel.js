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


//took the inner html of the table and added the format needed to its rows
function addRestaurantRow(){
    table_restaurants.innerHTML+=`<tr>
    <td></td>
    <td><input type='text'/></td>
    <td><input type='text'/></td>
    <td><input type='file'/></td>
    <td><input type='text'/></td>
    <td><select>
        <option value= '1'>category A</option>
        <option value= '2'>category B</option>
        <option value= '3'>category C</option>
        <option value= '4'>category D</option>
        <option value= '5'>category F</option>
    </select> </td>
</tr>`;
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
            userstable . innerHTML += `<tr>
            <td>${response.data[u]["id"]}</td>
            <td>${response.data[u]["fname"]}</td>
            <td>${response.data[u]["lname"]}</td>
            <td>${response.data[u]["email"]}</td>
            <td>${response.data[u]["password"]}</td>
            <td>${response.data[u]["user_piclink"]}</td>
            <td class="given-type" contenteditable = true>${response.data[u]["type"]}</td>
            <td><button class="edituserbutton">Edit</button></td>
        </tr>`;
        // editing type
        var editbutton = document.querySelector(".edituserbutton");
        editbutton.addEventListener("click", function(){
            var userid = response.data[u]["id"];
            var usertype = response.data[u]["type"];
            let data = new FormData();
            data.append('id', userid);
            data.append('type', usertype);
            axios({
                method: 'post',
                url: 'http://localhost/project/updateUserType.php',
                data: data,
            })
            .then(function (response) {
                console.log(response);
                })
        })
        }
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
            <td class="approved-button" id="${response.data[r]["id"]}" ><a href= ""><ion-icon name="shield-checkmark"></ion-icon></a></td>
            <td class="denied-button" ><a href= ""><ion-icon name="close"></ion-icon></a></td>
        </tr>`;
        // let btnapprove = document.querySelector(`#${response.data[r]["id"]}`);
        // btnapprove.addEventListener('click', function(){
        // status = 'approved';


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
