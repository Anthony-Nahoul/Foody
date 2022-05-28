//toggle user dropdown on profile picture click
let profilepicture=document.querySelector('.img-profile');
profilepicture.addEventListener('click',toggleDropdown);
function toggleDropdown(){
    let userdropdown=document.querySelector('.user-dropdown');
    userdropdown.classList.toggle('hide');
}