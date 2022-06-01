function DentalClinic(){
var name=prompt("Enter the patient name");
var decisionforClean =prompt("Was cleaning performed?(y/n)");
var decisionforCavity = prompt("Has cavity-filling performed?(y/n)");
var decisionforXray = prompt("Has X-Ray performed?(y/n)");
    
//lets initialize the value of subtotal,xray,clean,cavity be 0 and tax is constant ie 15%
var clean = 0;
var cavity= 0;
var xray=0;
var subtotal = 0;
var tax = 15;
//conditon check
if (decisionforClean=="y" || decisionforClean=="Y"){
clean = 60;

}
if (decisionforCavity=="y" || decisionforCavity=="Y"){
    cavity = 200;
}
if (decisionforXray=="y" || decisionforXray=="Y"){
    xray=100;
}
subtotal = (clean+cavity+xray);
var tax = (subtotal*tax)/100;
var total = (subtotal+tax);

document.getElementById("name").innerHTML=name;
document.getElementById("subtotal").innerHTML=subtotal;
document.getElementById("tax").innerHTML=tax;
document.getElementById("total").innerHTML=total;
}
DentalClinic();