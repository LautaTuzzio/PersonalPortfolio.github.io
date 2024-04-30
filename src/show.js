document.addEventListener("DOMContentLoaded", function() {
    var recycleBinImage = document.getElementById("recycleBinImage");
    var recycleBinHolder = document.getElementById("recycleBinHolder");
    var index3Content = document.getElementById("index3Content");

    if (recycleBinImage) {
        recycleBinImage.addEventListener("click", toggleIndexContent);
    }

    if (recycleBinHolder) {
        recycleBinHolder.addEventListener("click", toggleIndexContent);
    }

    function toggleIndexContent() {
        if (index3Content.style.display === "none" || index3Content.style.display === "") {
            index3Content.style.display = "block";
            index3Content.style.position = "absolute";
        }
    }
});
