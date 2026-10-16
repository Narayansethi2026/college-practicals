var laptop = document.querySelector("h4")
var add = document.querySelector("#add")
var check = 0

add.addEventListener("click", function () {

    if (check == 0) {
        laptop.innerHTML = "web developers"
        laptop.style.color = "red"
        console.log("hui hui hui")
        check = 1
    }
})
