function GetFields(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","request.xml",false);
    xhr.send();
    xmlDoc = xhr.responseXML;
    document.getElementById("name").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("date").innerHTML = xmlDoc.getElementsByTagName("date")[0].childNodes[0].nodeValue;
    document.getElementById("plases").innerHTML = xmlDoc.getElementsByTagName("plases")[0].childNodes[0].nodeValue;
}