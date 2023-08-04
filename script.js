function bmi(){
    var h=document.getElementById('h').value;
    var w=document.getElementById('w').value;
    var bmi=w/(h/100*h/100);
    var bmii=(bmi.toFixed(2));


    document.getElementById("result").innerHTML="your BMI is "+bmii;


}