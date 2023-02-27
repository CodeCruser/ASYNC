var cds = []; 
var currentIndex = 0; 

function loadCatalog() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xmlDoc = this.responseXML;
            var cdNodes = xmlDoc.getElementsByTagName("CD");
            for (var i = 0; i < cdNodes.length; i++) {
                var cd = {};
                cd.title = cdNodes[i].getElementsByTagName("TITLE")[0].textContent;
                cd.artist = cdNodes[i].getElementsByTagName("ARTIST")[0].textContent;
                cd.year = cdNodes[i].getElementsByTagName("YEAR")[0].textContent;
                cds.push(cd);
            }
            displayCD();
        }
    };
    xhr.open("GET", "xml-file.xml", true);
    xhr.send();
}

function displayCD() {
    document.getElementById("TITLE").innerHTML = cds[currentIndex].title;
    document.getElementById("ARTIST").innerHTML = cds[currentIndex].artist;
    document.getElementById("YEAR").innerHTML = cds[currentIndex].year;
}

function nextCD() {
    if (currentIndex < cds.length - 1) { 
        currentIndex++;
        displayCD();
    }
}

function prevCD() {
    if (currentIndex > 0) { 
        currentIndex--;
        displayCD();
    }
}
