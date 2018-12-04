function calculate(){
    sum = 0;
    count = document.getElementById("persons").value;

    visa = document.getElementById("visa");
    urgency = document.getElementById("urgency");
    transfer = document.getElementById("transfer");
    country = document.getElementById("place").options.selectedIndex;
    discount = document.getElementById("discount").options.selectedIndex;

//Countries
    if(country == 1){
        sum += count * 150;
    }
    if(country == 2){
        sum += count * 180;
    }
    if(country == 3){
        sum += count * 135;
    }
    if(country == 4){
        sum += count * 230;
    }
    if(country == 5){
        sum += count * 250;
    }
    if(country == 6){
        sum += count * 30;
    }

//Discount
    if(discount == 2){
        sum = sum * 0.93;
    }
    if(discount == 3){
        sum = sum * 0.85;
    }
//Added service
    if($(visa).is(':checked')){
       sum+=count*60;
    }

    if($(urgency).is(':checked')){
       sum+=count*5;
    }

    if($(transfer).is(':checked')){
       sum+=count*18;
    }

    var result = document.getElementById('details');

    if(sum!=0 && result.innerHTML==""){
        result.innerHTML += sum + '$';
    }
    else if(result.innerHTML !="" && sum!=0){
        result.innerHTML+='';
    }
    else{
        alert("Корректно заполните данные");
    }

}