function validiranje() {

    var mojDiv=document.getElementById("mojDivPoruke");
    var validacija = new Validacija(mojDiv);
    validacija.godina(document.getElementById("prvi"));
   // validacija.repozitorij(document.getElementById("drugi")); 
   // validacija.repozitorij(document.getElementById("treci")); 
    
    }