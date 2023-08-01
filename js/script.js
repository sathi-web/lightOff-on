document.querySelector("h1").innerHTML = "khadiza akter sathi"
document.querySelector(".one").innerHTML = "hellow"

let onbtn = document.querySelector(".lighton");
let offbtn = document.querySelector(".lightoff");
let light = document.querySelector(".light");
let pass = document.querySelector(".pass");
let icon = document.querySelector(".icon");


onbtn.addEventListener("click", function () {
    light.src = "images/pic_bulbon.gif"
})
offbtn.addEventListener("click", function () {
    light.src = "images/pic_bulboff.gif"
})
icon.addEventListener("click", function () {
    if (pass.type == "password") {
        pass.type = "text"
        icon.classList.add("fa-regular fa-eye");
    } else {
        pass.type = "password"
        icon.classList.add("fa-regular fa-eye-slash");

        
    }
})
