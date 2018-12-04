function GetFields(){
    request = new XMLHttpRequest();
    request.open("GET","request.xml",false); 
    request.send(); 
    xmlDoc = request.responseXML; 

    document.getElementById("trip-title").innerHTML = 'Доступные туры';
    document.getElementById("row-trips").classList.add("dark-row");

    document.getElementById("name_1").innerHTML = xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue;
    document.getElementById("name_2").innerHTML = xmlDoc.getElementsByTagName("name")[1].childNodes[0].nodeValue;
    document.getElementById("name_3").innerHTML = xmlDoc.getElementsByTagName("name")[2].childNodes[0].nodeValue;

    document.getElementById("date_1").innerHTML = xmlDoc.getElementsByTagName("date")[0].childNodes[0].nodeValue;
    document.getElementById("date_2").innerHTML = xmlDoc.getElementsByTagName("date")[1].childNodes[0].nodeValue;
    document.getElementById("date_3").innerHTML = xmlDoc.getElementsByTagName("date")[2].childNodes[0].nodeValue;

    document.getElementById("places_1").innerHTML = xmlDoc.getElementsByTagName("places")[0].childNodes[0].nodeValue + ' мест';
    document.getElementById("places_2").innerHTML = xmlDoc.getElementsByTagName("places")[1].childNodes[0].nodeValue + ' мест';
    document.getElementById("places_3").innerHTML = xmlDoc.getElementsByTagName("places")[2].childNodes[0].nodeValue + ' мест';
  }