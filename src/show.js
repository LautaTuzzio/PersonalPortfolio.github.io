document.addEventListener("DOMContentLoaded", function() {
    var recycleBinImage = document.getElementById("recycleBinImage");
    var recycleBinHolder = document.getElementById("recycleBinHolder");
    var index3Content = document.getElementById("index4Content");
    var recycleBinCloseButton = document.querySelector("#index4Content .close-ico");

    if (recycleBinImage) {
        recycleBinImage.addEventListener("click", toggleRecycleBinContent);
    }

    if (recycleBinHolder) {
        recycleBinHolder.addEventListener("click", toggleRecycleBinContent);
    }

    if (recycleBinCloseButton) {
        recycleBinCloseButton.addEventListener("click", closeRecycleBinContent);
    }

    function toggleRecycleBinContent() {
        if (index3Content.style.display === "none" || index3Content.style.display === "") {
            index3Content.style.display = "block";
            index3Content.style.position = "absolute";
        }
    }

    function closeRecycleBinContent() {
        index3Content.style.display = "none";
    }

    var internetExplorerImage = document.getElementById("internetExplorerImage");
    var internetExplorerHolder = document.getElementById("internetExplorerHolder");
    var index2Content = document.getElementById("index2Content");
    var internetExplorerCloseButton = document.querySelector("#index2Content .close-ico");

    if (internetExplorerImage) {
        internetExplorerImage.addEventListener("click", toggleInternetExplorerContent);
    }

    if (internetExplorerHolder) {
        internetExplorerHolder.addEventListener("click", toggleInternetExplorerContent);
    }

    if (internetExplorerCloseButton) {
        internetExplorerCloseButton.addEventListener("click", closeInternetExplorerContent);
    }

    function toggleInternetExplorerContent() {
        if (index2Content.style.display === "none" || index2Content.style.display === "") {
            index2Content.style.display = "block";
            index2Content.style.position = "absolute";
        }
    }

    function closeInternetExplorerContent() {
        index2Content.style.display = "none";
    }

    var myComputerImage = document.getElementById("myComputerImage");
    var myComputerHolder = document.getElementById("myComputerHolder");
    var indexContent = document.getElementById("indexContent");
    var myComputerCloseButton = document.querySelector("#indexContent .close-ico");

    if (myComputerImage) {
        myComputerImage.addEventListener("click", toggleMyComputerContent);
    }

    if (myComputerHolder) {
        myComputerHolder.addEventListener("click", toggleMyComputerContent);
    }

    if (myComputerCloseButton) {
        myComputerCloseButton.addEventListener("click", closeMyComputerContent);
    }

    function toggleMyComputerContent() {
        if (indexContent.style.display === "none" || indexContent.style.display === "") {
            indexContent.style.display = "block";
            indexContent.style.position = "absolute";
        }
    }

    function closeMyComputerContent() {
        indexContent.style.display = "none";
    }

    var myDocumentsImage = document.getElementById("myDocumentsImage");
    var myDocumentsHolder = document.getElementById("myDocumentsHolder");
    var index4Content = document.getElementById("index3Content");
    var myDocumentsCloseButton = document.querySelector("#index3Content .close-ico");

    if (myDocumentsImage) {
        myDocumentsImage.addEventListener("click", toggleMyDocumentsContent);
    }

    if (myDocumentsHolder) {
        myDocumentsHolder.addEventListener("click", toggleMyDocumentsContent);
    }

    if (myDocumentsCloseButton) {
        myDocumentsCloseButton.addEventListener("click", closeMyDocumentsContent);
    }

    function toggleMyDocumentsContent() {
        if (index4Content.style.display === "none" || index4Content.style.display === "") {
            index4Content.style.display = "block";
            index4Content.style.position = "absolute";
        }
    }

    // Function to close Additional index content
    function closeMyDocumentsContent() {
        index4Content.style.display = "none";
    }
});
