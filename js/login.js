
    //console.log('DOM fully loaded and parsed');
    let button = document.getElementById("submit");
    button.addEventListener("click", submitclick);
    function submitclick(){
        
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        
        let data = new FormData();
        data.append('email', email);
        data.append('password', password);
        //let url = 'http://localhost/Foody-backend/login.php';
        //let id = localStorage.getItem("user_id");
        //url += "?user_id=" + id;
        //console.log(email)
        //console.log(password)
        axios({
            method: 'POST',
            url:'http://localhost/Foody-backend/login.php',
            data: data
        }).then(function (response) {
            //console.log(password)
            console.log(response.data.type,'response',response.data.response)
            if (response.data.type=='admin' && response.data.response=='Logged in'){
                window.location.href='http://localhost/Foody/pages/adminpanel.html'
            } else {
                window.location.href='http://localhost/Foody/index.html'
            }
            
            //console.log('response result: ',result);
           
           
            /*for (let i=0; i<result.length; i++){
                if (result[i][0]==="Logged in"){
                    var message = "Logged in"
                }
            }*/
            //console.log('response[result]',result[response])
            //let message = result.status;
            //console.log(message);
            //console.log('response',response);
            //console.log('response status',response[status]);

            // const promise = axios.get(url)

            // // using .then, create a new promise which extracts the data
            // const dataPromise = promise.then((response) => response.data)
            // console.log('response data ',dataPromise);



            // // using .then, create a new promise which extracts the data
            // const response_status = promise.then((response) => response.data)
            // console.log('response status ',dataPromise.status);
            // console.log('response',response)

            /*if(message == "Logged in"){
                console.log(email);
                let type = result.type
                console.log('type',type)
                if (type=="user"){
                    window.location("../index.html");
                }
                else{
                    window.location("../pages/adminpanel.html");
                }
                localStorage.setItem("id",result.id);
                document.getElementById("email").value = "";
                document.getElementById("password").value = "";
                window.location("index.html")
            }})*/
    }
        )}
