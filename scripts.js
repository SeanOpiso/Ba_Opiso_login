function login() {
    if (uname.value.length == 0 && psw.value.length != 0) {
        document.getElementById("noInput").innerHTML = "Please enter your username.";
        document.getElementById("unameError").innerHTML = "*";
        document.getElementById("pswError").innerHTML = "";
        console.log("Login error");
    } else if (uname.value.length != 0 && psw.value.length == 0) {
        document.getElementById("noInput").innerHTML = "Please enter your password.";
        document.getElementById("unameError").innerHTML = "";
        document.getElementById("pswError").innerHTML = "*";
        console.log("Login error");
    } else if (uname.value.length == 0 && psw.value.length == 0) {
        document.getElementById("noInput").innerHTML = "Please enter your username and password.";
        document.getElementById("unameError").innerHTML = "*";
        document.getElementById("pswError").innerHTML = "*";
        console.log("Login error");
    } else {
        document.getElementById("unameError").innerHTML = "";
        document.getElementById("pswError").innerHTML = "";
        location.replace("advocacy/index.html");
    }
}