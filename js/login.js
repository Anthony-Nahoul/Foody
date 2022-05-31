    //verifying user
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
            console.log(response);
            console.log('reponse data type',response.data.type,'response data response',response.data.response)

            if (response.data.type=='admin' && response.data.response=='Logged in'){
               window.location.href='pages/adminpanel.html'
            } else if(response.data.type=='user' && response.data.response=='Logged in'){
                window.location.href='/index.html'
            }
            localStorage.setItem("id",response.data.user_id);

           
;    }
        )}
