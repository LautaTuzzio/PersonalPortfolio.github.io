document.addEventListener("DOMContentLoaded", function() {
    var recycleBinImage = document.getElementById("recycleBinImage");
    var recycleBinHolder = document.getElementById("recycleBinHolder");
    var index3Content = document.getElementById("index3Content");
    var closeButton = document.querySelector(".close-ico");

    if (recycleBinImage) {
        recycleBinImage.addEventListener("click", toggleIndexContent);
    }

    if (recycleBinHolder) {
        recycleBinHolder.addEventListener("click", toggleIndexContent);
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeIndexContent);
    }

    function toggleIndexContent() {
        if (index3Content.style.display === "none" || index3Content.style.display === "") {
            index3Content.style.display = "block";
            index3Content.style.position = "absolute";
        }
    }

    function closeIndexContent() {
        index3Content.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var recycleBinImage = document.getElementById("internetExplorerImage");
    var recycleBinHolder = document.getElementById("internetExplorerHolder");
    var index3Content = document.getElementById("index2Content");
    var closeButton = document.querySelector(".close-ico");

    if (recycleBinImage) {
        recycleBinImage.addEventListener("click", toggleIndexContent);
    }

    if (recycleBinHolder) {
        recycleBinHolder.addEventListener("click", toggleIndexContent);
    }

    if (closeButton) {
        closeButton.addEventListener("click", closeIndexContent);
    }

    function toggleIndexContent() {
        if (index2Content.style.display === "none" || index2Content.style.display === "") {
            index2Content.style.display = "block";
            index2Content.style.position = "absolute";
        }
    }

    function closeIndexContent() {
        index2Content.style.display = "none";
    }
});
