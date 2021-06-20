let chatbox = document.querySelector(".chatbox");
chatbox.addEventListener("click", function() {
    if(document.querySelector(".chatForm").style.visibility = "hidden") {
        document.querySelector(".chatForm").style.visibility = "visible";
    }else if(document.querySelector(".chatForm").style.visibility = "visible"){
        document.querySelector(".chatForm").style.visibility = "hidden";
    }
})

