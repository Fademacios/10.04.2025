document.addEventListener("DOMContentLoaded", function() {
    const naglowek = document.querySelector("h1")
    const przycisk = document.getElementById("przycisk1")

    przycisk.addEventListener("click", function() {
        naglowek.textContent = "zmien naglowek"
    })

})