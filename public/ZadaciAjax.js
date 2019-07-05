var ZadaciAjax = (function(){
    var konstruktor = function(callbackFn){
        var ajax = new XMLHttpRequest();
        var poslan = true;
        ajax.onreadystatechange = function()
        {
            if(ajax.readyState == 4 && ajax.status == 200) callbackFn(ajax.response);
            poslan = false;   
        }
        if (poslan) ({"greska":"Vec ste uputili zahtjev"});
        return {
            dajXML:function()
            {
                ajax.open("GET","http://localhost:8080/zadaci" , true);
                ajax.timeout = 2000; // time in milliseconds

                ajax.ontimeout = function (e) {};
                ajax.setRequestHeader('Accept', 'application/xml');
                if (!poslan) ajax.send();
            },
            dajCSV:function()
            {
                ajax.open("GET","http://localhost:8080/zadaci" , true);
                ajax.timeout = 2000; // time in milliseconds

                ajax.ontimeout = function (e) {};
                ajax.setRequestHeader('Accept', 'text/csv');
                if (!poslan) ajax.send();
            },
            dajJSON:function()
            {
                ajax.open("GET","http://localhost:8080/zadaci" , true);
                ajax.timeout = 2000; // time in milliseconds

                ajax.ontimeout = function (e) {};
                ajax.setRequestHeader('Accept', 'application/json');
                if (!poslan) ajax.send();
            }
        }
    }
    return konstruktor;
}());    

