//akun
function login(){
    //var done=0;
    var username=document.getElementById('email').value;
    //username=username.toLowerCase();
    console.log(username);
    var password=document.getElementById('password').value;
    console.log(password);
    // password=password.toLowerCase();
    if(username != "" && password != ""){
        if (username=="ira@gmail.com" && password=="iraganteng") { 
            location.replace('katalog.html'); 
            }
        else{
            alert("password atau username anda salah!");
        } 
    }
    else{
        alert("password atau username tidak boleh kosong!");
    }
    // if (done==0) { alert("Invalid login!"); }
    }
