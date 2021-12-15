function login(){
    var email = document.getElementById("staticEmail").value;
    var password = document.getElementById("inputPassword").value;
    fetch("./data.json")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        for(var x of data){
            if(email==x.username && password==x.password) window.location.href="home.html";
            else console.log('no');
        }
    })
}
