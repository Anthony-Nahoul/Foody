let button = document.getElementById("submit");
button.addEventListener("click", submitclick);
function submitclick(){
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let piclink = document.getElementById("piclink").value;
    let data = new FormData();
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('email', email);
    data.append('password', password);
    data.append('piclink', piclink);

    axios({
        method: 'POST',
        url:'http://localhost/Foody-backend/signup.php',
        data: data
    }).then(function (response) {
            console.log(response);
            window.location.href='http://localhost/Foody/index.html';
        
    })
}