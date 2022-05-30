
    let button = document.getElementById("submit");
    button.addEventListener("click", submitclick);
    function submitclick(){
        
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        let data = new FormData();
        data.append('email', email);
        data.append('password', password);

        axios({
            method: 'POST',
            url:'http://localhost/Foody-backend/login.php',
            data: data
        }).then(function (response) {
            console.log(response.data.type,'response',response.data.response)
            if (response.data.type=='admin' && response.data.response=='Logged in'){
                window.location.href='http://localhost/Foody/pages/adminpanel.html'
            } else {
                window.location.href='http://localhost/Foody/index.html'
            }

    }
        )}
