var Validacija=(function(){

    var konstruktor=function(divElementPoruke){

        divElementPoruke.innerHTML = "";
  


    return{
    ime:function(inputElement){
        var validacija = true;
        var input = inputElement.value;

    var regex = /[A-Z]{1}'?[a-z]{1,}'?([-\ ]{1}[A-Z]{1}'?[a-z]{1,}'?([-\ ]{1}[A-Z]{1}'?[a-z]{1,}'?([-\ ]{1}[A-Z]{1}'?[a-z]{1,}'?){0,1}){0,1}){0,1}/;
    if(!input.match(regex)) {
        validacija = false;
    }
    

        if(validacija == false && divElementPoruke.innerHTML===""){
            divElementPoruke.innerHTML = "Sljedeća polja nisu validna:ime!";
            inputElement.style.backgroundColor="orangered";
            }
            var substring = "ime";

            if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
                divElementPoruke.innerHTML += " ime!";
                inputElement.style.backgroundColor="orangered";
            }
 
            if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:ime!"){
                inputElement.style.backgroundColor="white";
            divElementPoruke.innerHTML = "";
            }

            var nakrajuvise = ", ime!";
            var napocetku = ":ime,";
            var usredinije = ", ime,";
            if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, ime!/g,'!');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, ime,/g,', ');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:ime, /g,':');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == false)inputElement.style.backgroundColor="orangered";
            if(validacija == true)inputElement.style.backgroundColor="white";


    
},
    godina:function(inputElement){
        var validacija = true;
        var tekst = inputElement.value;
    if (tekst[0] != '2' || tekst[5] != '2' || tekst[1] != '0' || tekst[6] != '0' || tekst[4] != '/')
    {
       validacija = false;
              }
    var broj1 = tekst[2];
    var broj2 = tekst[3];
    var b = Number(broj1+broj2);

    broj1 = tekst[7];
    broj2 = tekst[8];
    var c = Number(broj1+broj2)
    if (c-b != 1) 
    {
        validacija = false;
    }

    if(validacija == false && divElementPoruke.innerHTML===""){
        divElementPoruke.innerHTML = "Sljedeća polja nisu validna:godina!";
        inputElement.style.backgroundColor="orangered";
        }
        var substring = "godina";

        if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
            divElementPoruke.innerHTML += " godina!";
            inputElement.style.backgroundColor="orangered";
        }

        if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:godina!"){
            inputElement.style.backgroundColor="white";
        divElementPoruke.innerHTML = "";
        }

        var nakrajuvise = ", godina!";
        var napocetku = ":godina,";
        var usredinije = ", godina,";
        if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, godina!/g,'!');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, godina,/g,', ');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:godina, /g,':');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == false)inputElement.style.backgroundColor="orangered";
        if(validacija == true)inputElement.style.backgroundColor="white";

    

    },
    repozitorij:function(inputElement,regex){
        var validacija = true;
        var input = inputElement.value;
        if(!input.match(regex)){
            validacija = false;
        }    

        if(validacija == false && divElementPoruke.innerHTML===""){
            divElementPoruke.innerHTML = "Sljedeća polja nisu validna:repozitorij!";
            inputElement.style.backgroundColor="orangered";
            }
            var substring = "repozitorij";

            if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
                divElementPoruke.innerHTML += " repozitorij!";
                inputElement.style.backgroundColor="orangered";
            }
 
            if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:repozitorij!"){
                inputElement.style.backgroundColor="white";
            divElementPoruke.innerHTML = "";
            }

            var nakrajuvise = ", repozitorij!";
            var napocetku = ":repozitorij,";
            var usredinije = ", repozitorij,";
            if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, repozitorij/g,'!');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, repozitorij,/g,', ');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:repozitorij, /g,':');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == false)inputElement.style.backgroundColor="orangered";
            if(validacija == true)inputElement.style.backgroundColor="white";



    },
    index:function(inputElement){
        var validacija = true;
        var input = inputElement.value;
        var regex = /(1[4-9]\d{3}|20\d{3})/;
        if(!input.match(regex)) {
            validacija = false;
        }

        if(validacija == false && divElementPoruke.innerHTML===""){
            divElementPoruke.innerHTML = "Sljedeća polja nisu validna:index";
            inputElement.style.backgroundColor="orangered";
            }
            var substring = "index";

            if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
                divElementPoruke.innerHTML += " index!";
                inputElement.style.backgroundColor="orangered";
            }
 
            if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:index!"){
                inputElement.style.backgroundColor="white";
            divElementPoruke.innerHTML = "";
            }

            var nakrajuvise = ", index!";
            var napocetku = ":index,";
            var usredinije = ", index,";
            if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, index!/g,'!');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, index,/g,', ');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:index, /g,':');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == false)inputElement.style.backgroundColor="orangered";
            if(validacija == true)inputElement.style.backgroundColor="white";


        
    },
    naziv:function(inputElement){
        var validacija = true;
        var input = inputElement.value;

    if(!input[0].match(/[a-z]/i)) {
        validacija = false;
    }
    var brojac=0;
    var i;
    var j;
    var niz = ['\\', '/', '-', '\"', '\'', '!', '?', ':', ';', ',']; 
    var validira;

        for(i = 1; i < input.length-1; i++) {
         
            validira = false;

        
        if( !(input[i].match(/[a-z]/i) || input[i].match(/[0-9]/)) ) {
            for(j = 0; j < niz.length; j++) {
            if(input[i] == niz[j]) {
                validira = true;
            }
            }
            if(validira == false) {
                validacija = false;
            }
        }

        if(input[i].match(/[a-z]/i)) {
            brojac++;
        }

        }

        if(!((input[input.length-1].match(/[a-z]/) && brojac >= 1) || (input[input.length-1].match(/[0-9]/) && brojac >= 2))) validacija = false;

        if(validacija == false && divElementPoruke.innerHTML===""){
            divElementPoruke.innerHTML = "Sljedeća polja nisu validna:naziv!";
            inputElement.style.backgroundColor="orangered";
            }
            var substring = "naziv";

            if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
                divElementPoruke.innerHTML += " naziv!";
                inputElement.style.backgroundColor="orangered";
            }
 
            if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:naziv!"){
            inputElement.style.backgroundColor="white";
            divElementPoruke.innerHTML = "";
            }

            var nakrajuvise = ", naziv!";
            var napocetku = ":naziv,";
            var usredinije = ", naziv,";
            if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, naziv!/g,'!');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, naziv,/g,', ');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:naziv, /g,':');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == false)inputElement.style.backgroundColor="orangered";
            if(validacija == true)inputElement.style.backgroundColor="white";

     

    },
    password:function(inputElement){
        var validacija = true;
        var input = inputElement.value;
        var regex = /^(?=.*[0-9])(?=.*[a-z]+.*)[0-9a-zA-Z]{6,}$|^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]{6,}$|^(?=.*[a-z]+.*)(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
        if(!input.match(regex)) {
            validacija = false;
        }

        if(validacija == false && divElementPoruke.innerHTML===""){
            divElementPoruke.innerHTML = "Sljedeća polja nisu validna:password!";
            inputElement.style.backgroundColor="orangered";
            }
            var substring = "password";

            if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
                divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
                divElementPoruke.innerHTML += " password!";
                inputElement.style.backgroundColor="orangered";
            }
 
            if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:password!"){
                inputElement.style.backgroundColor="white";
            divElementPoruke.innerHTML = "";
            }

            var nakrajuvise = ", password!";
            var napocetku = ":password,";
            var usredinije = ", password,";
            if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, password!/g,'!');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, password,/g,', ');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:password, /g,':');
            inputElement.style.backgroundColor="white";
            }
            if(validacija == false)inputElement.style.backgroundColor="orangered";
            if(validacija == true)inputElement.style.backgroundColor="white";

        

    },
    url:function(inputElement){
        var validacija = true;
        var input = inputElement.value;

        var indeks = input.indexOf(':');
        if(indeks == -1) {
            validacija = false;
        }
        var protokol= input.substring(0, indeks); 

        var protokoli = ['http', 'https', 'ftp', 'ssh'];
        var i;
        var protok = false;
        for(i = 0; i < protokoli.length; i++) {

         if(protokol == protokoli[i]) {
         protok = true;
         }

        }
        if(protok == false) {
            validacija = false;
        }

        if(!(input[indeks+1]=='/' && input[indeks+2]=='/' )) {
            validacija = false;
        }

var regexparametar = /(([a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))\=(([a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))\&(([a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))\=(([a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))/;
        var regexhost = /(([a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))((\.[a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))*/;
        var regexputanja = /(([a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))((\/[a-z0-9]{1})|([a-z0-9]{1}[a-z\d\-]*[a-z0-9]{1}))*/;
        
        var indeks2 = input.indexOf('/', indeks+3);
        var host= input.substring(indeks+3, indeks2); 

        if(!host.match(regexhost)) {
            validacija = false;
        }

               var putanja = "";


            i = indeks2+1; 

        while(input[i] != '?' && i < input.length ) {
            putanja += input[i];
            i++;
    }
    
    if(!putanja.match(regexputanja)) {
        validacija = false;
    }

   if(i == input.length) {

    if(validacija == false && divElementPoruke.innerHTML===""){
        divElementPoruke.innerHTML = "Sljedeća polja nisu validna:url!";
        inputElement.style.backgroundColor="orangered";
        }
        var substring = "url";

        if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
            divElementPoruke.innerHTML += " url!";
            inputElement.style.backgroundColor="orangered";
        }

        if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:url!"){
            inputElement.style.backgroundColor="white";
        divElementPoruke.innerHTML = "";
        }

        var nakrajuvise = ", url!";
        var napocetku = ":url,";
        var usredinije = ", url,";
        if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, url!/g,'!');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, url,/g,', ');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:url, /g,':');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == false)inputElement.style.backgroundColor="orangered";
        if(validacija == true)inputElement.style.backgroundColor="white";


   }
 else {
    var parametar = input.substring(i+1, input.length);
    if(!parametar.match(regexparametar)) {
        validacija = false;
    }

    if(validacija == false && divElementPoruke.innerHTML===""){
        divElementPoruke.innerHTML = "Sljedeća polja nisu validna:url!";
        inputElement.style.backgroundColor="orangered";
        }
        var substring = "url";

        if(validacija == false && !divElementPoruke.innerHTML.includes(substring)){
            divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/!/g,',');
            divElementPoruke.innerHTML += " url!";
            inputElement.style.backgroundColor="orangered";
        }

        if(validacija == true && divElementPoruke.innerHTML ==="Sljedeća polja nisu validna:url!"){
            inputElement.style.backgroundColor="white";
        divElementPoruke.innerHTML = "";
        }

        var nakrajuvise = ", url!";
        var napocetku = ":url,";
        var usredinije = ", url,";
        if(validacija == true && divElementPoruke.innerHTML.includes(nakrajuvise)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, url!/g,'!');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == true && divElementPoruke.innerHTML.includes(usredinije)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/, url,/g,', ');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == true && divElementPoruke.innerHTML.includes(napocetku)){
        divElementPoruke.innerHTML = divElementPoruke.innerHTML.replace(/:url, /g,':');
        inputElement.style.backgroundColor="white";
        }
        if(validacija == false)inputElement.style.backgroundColor="orangered";
        if(validacija == true)inputElement.style.backgroundColor="white";


 }


                }
        }

    }
    return konstruktor;
    }());


 
