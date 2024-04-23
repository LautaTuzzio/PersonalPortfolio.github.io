
document.addEventListener("DOMContentLoaded", function() {

    // Function to load content for My Computer
    function loadMyComputerContent() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("indexContent").innerHTML = xhr.responseText;
            }
        };
        xhr.open("GET", "./myComputer/index.html", true);
        xhr.send();
    }

    // Function to load content for Internet Explorer
    function loadInternetExplorerContent() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("index2Content").innerHTML = xhr.responseText;
            }
        };
        xhr.open("GET", "./internetExplorer/index.html", true);
        xhr.send();
    }

    // Function to load content for Recycle Bin
    function loadRecycleBinContent() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("index3Content").innerHTML = xhr.responseText;
            }
        };
        xhr.open("GET", "./recycleBin/index.html", true);
        xhr.send();
    }

    // Function to load content for My Documents
    function loadMyDocumentsContent() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById("index4Content").innerHTML = xhr.responseText;
            }
        };
        xhr.open("GET", "./myDocuments/index.html", true);
        xhr.send();
    }

    // Adding click event listeners to the images
    document.getElementById("myComputerImage").addEventListener("click", function() {
        loadMyComputerContent();
    });

    document.getElementById("internetExplorerImage").addEventListener("click", function() {
        loadInternetExplorerContent();
    });

    document.getElementById("recycleBinImage").addEventListener("click", function() {
        loadRecycleBinContent();
    });

    document.getElementById("myDocumentsImage").addEventListener("click", function() {
        loadMyDocumentsContent();
    });

    document.getElementById("myDocumentsLogo").addEventListener("click", function(){
        loadMyDocumentsContent();
    });

    document.getElementById("myComputerLogo").addEventListener("click", function() {
        loadMyComputerContent();
    });

    document.getElementById("internetExplorerLogo").addEventListener("click", function() {
        loadInternetExplorerContent();
    });

    document.getElementById("recycleBinLogo").addEventListener("click", function() {
        loadRecycleBinContent();
    });
});
