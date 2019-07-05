function validiranje() {

    var mojDiv=document.getElementById("mojDivPoruke");
    var validacija = new Validacija(mojDiv);
    validacija.ime(document.getElementById("drugi1"));
    validacija.index(document.getElementById("treci1")); 
    
    }