function vjezbeGodine(divic, divSadrzaj){
    var ajax = new XMLHttpRequest();
    var id = divic.value;
    ajax.onreadystatechange = function()
    {
        if(ajax.readyState == 4 && ajax.status == 200)
        {
            var odgovor = '';
            var niz = JSON.parse(ajax.response);
            odgovor += '<ul id = "lista">';
            for (i = 0; i < niz.length; i++)
            {
                odgovor += '<li>';
                odgovor += '<div class = "godina">';
                odgovor += '<p>'+niz[i].naziv+'</p>';
                odgovor += '<p> Student:'+niz[i].studentId+'</p>';
                odgovor += '</div>';
                odgovor += '</li>';
            }
            odgovor += '</ul>';

            if (niz.length == 1 && niz[0].naziv == '') odgovor = '';

            divSadrzaj.innerHTML = odgovor;
        }
    }
    ajax.open("GET","http://localhost:8080/vjezbe/" + id , true);
    ajax.send();
}