document.addEventListener("DOMContentLoaded", function(){
    const naglowek = document.getElementById("przycisk1")
    const przyciskZmienn = document.getElementById("#przycisk1")

    przyciskZmienn.addEventListener("click", function(){
        naglowek.textContent = "zmien naglowek"
    })

})