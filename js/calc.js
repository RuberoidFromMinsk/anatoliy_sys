function calculate(){
                sum = 0;
                count = 0;
                //person = document.getElementById("persons").value;
                /*discount = document.getElementById('discount');


                visa = document.getElementsByName('visa');
                urgency = document.getElementsByName('urgency');
                transfer = document.getElementsByName('transfer');

                    switch(person){
                        case "1":{
                            count = 1;
                            break;
                        }
                        case "2":{
                            count = 2;
                            break;
                        }
                        case "3":{
                            count = 3;
                            break;
                        }
                        case "4":{
                            count = 4;
                            break;
                        }
                        case "5":{
                            count = 5;
                            break;
                        }
                    }

                    sum+=count*100;

                    switch(discount){
                        case "1":{
                            sum = sum;
                        }
                        case "2":{
                            sum = sum * 0.9;
                        }
                    }

                    if(visa.checked == true){
                        sum+=count*60;
                    }

                    if(transfer.checked == true){
                        sum+=count*15;
                    }

                    if(urgency.checked == true){
                        sum+=count*10;
                    }*/

                    document.getElementById('details').innerHTML += sum;
                    
                

            }