document.addEventListener("DOMContentLoaded", function () {
    // No changes to your JavaScript code
    let h1 = document.querySelector("h1");
    let h3List = document.querySelectorAll("h3");

    function addRotationAnimation(element) {
        element.style.animation = "rotate 2s infinite";
    }

    addRotationAnimation(h1);
    h3List.forEach(addRotationAnimation);
});