function login(){
    const email = document.getElementById("staticEmail").value;
    const password = document.getElementById("inputPassword").value;
    console.log()
    fetch("data/data.json")
    .then(response => {
        return response.json();
    })
    .then((data) => {
        for(let x of data){
            if(email==x.username && password==x.password) alert("ok");
            else alert('Bạn đã nhập sai email/password');
        }
    })
    .catch((err)=>{alert(err);})
}


