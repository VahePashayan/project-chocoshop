let name = document.querySelector("#name");
let email = document.querySelector("#email");
let mess = document.querySelector("#mess");
let btn = document.querySelector(".btn");

let regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

name.addEventListener("input", () => {
    if(name.value.length < 4 || !isNaN(name.value[0])) {
        name.style.backgroundColor = "#ff9999";
    }else {
        name.style.backgroundColor = "white";
    }
})

email.addEventListener("input", () => {
    if(!(regexEmail.test(email.value))) {
        email.style.backgroundColor = "#ff9999";
    }else {
        email.style.backgroundColor = "white";
    }
})