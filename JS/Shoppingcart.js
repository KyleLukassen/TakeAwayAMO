// dit is de javascript pagina voor de winkelwagen
// author: Kyle Lukassen
// date of creation: 21-10-2019
// last modified: 2-4-2020 by Kyle lukassen

//de lege array van objects om later te vullen met gerechten
var aShoppingCart = [];
//een lege variable voor het berekenen van het totaal
var iSubtotaal = 0;

//het toevoegen van objects aan de array
function AddtoCart(name,price){
  	var Info = {};
   	Info['Name'] = name;
   	Info['Price'] = price;
   	aShoppingCart.push(Info);  
}

//het tekenen van de tabel
function ShowCart(){
//opzetten van de tabel
var Cart = "<table border='1|1'>";
	Cart+="</tr>";
	Cart+="<td>"+"Gerecht"+"</td>"
	Cart+="<td>"+"Prijs"+"</td>"
	Cart+="</tr>";
// voor ieder item in de array wordt een nieuwe regel in de tabel gezet
for (var i = 0; i < aShoppingCart.length;i++){
	Cart+="<tr>";
	Cart+="<td>"+aShoppingCart[i].Name+"</td>"
	Cart+="<td>"+"€"+ aShoppingCart[i].Price+"</td>"
	Cart+="</tr>";
}
Cart+="</table>"
//deze lijn zet de tabel in de div met ID(Rekening)
document.getElementById("Rekening").innerHTML=Cart;

//het berekenen van het totaal
for(var T = 0; T < aShoppingCart.length; T++){
	iSubtotaal = iSubtotaal + aShoppingCart[T].Price;
}
//punten worden in het eind bedrag gezet voor betere leesbaarheid
var Totaal = iSubtotaal.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
//deze lijn zet het eind bedrag in de div met ID (totale)
document.getElementById("totale").innerHTML= Totaal
 }

//deze functie zet de shoppingcart en subtotaal naar 0.
function EmptyCart(){
	aShoppingCart=[];
	iSubtotaal = 0;
}
