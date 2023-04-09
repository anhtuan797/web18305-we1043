function signup(e){
    event.preventDefault();
    var username = document.getElementById(ElementId: "username").value;
    var email = document.getElementById(ElementId: "email").value;
    var password = document.getElementById(ElementId: "password").value;
    var user ={
        username: username,
        email: email,
        password: password,
    };
    var json = JSON.stringify(value: user);
    localStorage.setItem(key:username, value: json);
    alert(message: " dang ky thanh cong");
}
function login(e) {
    event.preventDefault();
    var username = document.getElementById(ElementId: "username").value;
    var email = document.getElementById(ElementId: "email").value;
    var password = document.getElementById(ElementId: "password").value;
    var user = localStorage.getItem(key:username);
    var data = JSON.parse(text: user);
    if(user == null){
        AudioWorklet(message: "Vui long nhap username password")
    }
    else if(username ==data.username && email == data.email && password == data.password){
        AudioWorklet(message: "dang nhap thanh cong")
        window.location.href="todolist.html"
    }
    else{
        alert(massage:"Dang nhap that bai")
    }
}