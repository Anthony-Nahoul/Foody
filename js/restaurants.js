const transferlink = document.getElementById("title-card-1");
const reviewbtn = document.getElementById("reviewbtn");
transferlink.addEventListener("click", function(){
    location.href = "file:///C:/Users/Anthony/Desktop/Foody/pages/restaurantdetails.html"
})
reviewbtn.addEventListener("click", function(){
    location.href = "file:///C:/Users/Anthony/Desktop/Foody/pages/reviews.html"
})
// this function will store the li in a list and will compare the i to the current item, each 3 items show more
const show_more_button = document.querySelector("#showmore");
let currentItem = 3;
show_more_button.addEventListener("click", function(){
    let list = document.querySelectorAll("#categories > li");
    for (var i= currentItem; i<currentItem + 3; i++){
            list[i].style.display="block";
        
    }
    currentItem +=3;   
})