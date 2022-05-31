let stars=document.querySelectorAll('.star');
stars.forEach((star,index)=>{
    star.addEventListener('mouseover',function(){
        starHover(index);
    });
    star.addEventListener('mouseleave',function(){
        starLeave(index);
    });
    star.addEventListener('click',function(){
        starSet(index);
    });
});
function starHover(index){
    for(let i=0;i<=index;i++){
        stars[i].classList.add('hovered');
    }
}
function starLeave(index){
    for(let i=0;i<=index;i++){
        stars[i].classList.remove('hovered');
    }
}

function starSet(index){
    //remove all previously added states that affect the color of the star
    stars.forEach((star)=>{
        star.classList.remove('given');
        star.classList.remove('hovered');
    })
    for(let i=0;i<=index;i++){
        //give all the stars up to and including the current clicked star the color gold
        stars[i].classList.add('given');
    }
    document.querySelector(".hidden-rate").value = index+1;

}
// POPUP MENU FOR REVIEWS
let overlay=document.querySelector('.overlay');
let close=document.querySelector('.overlay .close-icon');
let reviewpopupbutton=document.querySelector('#review-popup-button')
close.addEventListener('click',toggleOverlay);
reviewpopupbutton.addEventListener('click',toggleOverlay);

function toggleOverlay(){
    overlay.classList.toggle('hide');
}

// LINKING API's

// GET INFO FOR RESTAURANTS
let restoid =1;
 let userid = 3;   /*window.localStorage.getItem(id);*/
let title = document.querySelector(".single-restaurant-title");
let description = document.querySelector(".single-restaurant-description");
let categoryname = document.querySelector(".single-restaurant-category");
let address = document.querySelector(".single-restaurant-address");
let data1 = new FormData();
data1.append('id',restoid);
axios({
    method: 'POST',
    url: 'http://localhost/foody-backend/getSpecificRestaurant.php',
    data: data1,
  }).then(function (response) {
    console.log(response.data);
    for (let i =0; i<(response.data).length;i++){
        title.innerHTML = `${response.data[i]["name"]}`;
        description.innerHTML = `${response.data[i]["description"]}`;
        address.innerHTML = `${response.data[i]["address"]}`;
        categoryname.innerHTML = `${response.data[i]["categoryname"]}`;
    }
  })

  //ADD REVIEW 
  let reviewbtn = document.querySelector(".submit-btn");
  
  reviewbtn.addEventListener("click",giveReview);
  function giveReview(e){
      e.preventDefault();
      let reviewtext = document.querySelector(".review-text").value;
      let starsrate = document.querySelector(".hidden-rate").value;
      let data= new FormData();
      
      data.append('userid', userid);
      data.append('restaurantid', restoid);
      data.append('description', reviewtext);
      axios({
        method: 'POST',
        url: 'http://localhost/foody-backend/addreview.php',
        data: data,
      }).then(function (response) { //ADD THE RATE 
        console.log(response);
        let data2 = new FormData();
        data2.append('userid', userid);
        data2.append('restaurantid', restoid);
        data2.append('value', starsrate);
        axios({
            method: 'POST',
            url: 'http://localhost/foody-backend/addrate.php',
            data: data2,
          }).then(function (response) {
            console.log(response);
          })
      })
  }


