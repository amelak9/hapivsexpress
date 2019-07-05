var GodineAjax = (function()
{
    var konstruktor = function(divSadrzaj){
        var ajax = new XMLHttpRequest();
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
                    odgovor += '<p>'+niz[i].nazivGod+'</p>';
                    odgovor += '<p> Repozitorij vjezbe:'+niz[i].nazivRepVje+'</p>';
                    odgovor += '<p> Repozitorij spirale:'+niz[i].nazivRepSpi+'</p>';
                    odgovor += '</div>';
                    odgovor += '</li>';
                }
                odgovor += '</ul>';

                if (niz.length == 1 && niz[0].nazivGod == '') odgovor = '';

                divSadrzaj.innerHTML = odgovor;
            }
        }
        ajax.open("GET","http://localhost:8080/godine" , true);
        ajax.send();
        return {
            osvjezi:function()
            {
                var ajax = new XMLHttpRequest();
                ajax.onreadystatechange = function()
                {
                    if(ajax.readyState == 4 && ajax.status == 200)
                    {
                        var odgovor = '';
                        var niz = JSON.parse(ajax.response);
                        odgovor += '<ul id = "lista">'
                        for (i = 0; i < niz.length; i++)
                        {
                            odgovor += '<li>';
                            odgovor += '<div class = "godina">';
                            odgovor += '<p>'+niz[i].nazivGod+'</p>';
                            odgovor += '<p> Repozitorij vjezbe:'+niz[i].nazivRepVje+'</p>';
                            odgovor += '<p> Repozitorij spirale:'+niz[i].nazivRepSpi+'</p>';
                            odgovor += '</div>';
                            odgovor += '</li>';
                        }
                        odgovor += '</ul>';

                        if (niz.length == 1 && niz[0].nazivGod == '') odgovor = '';
                        divSadrzaj.innerHTML = odgovor;
                    }
                }
            }
        }
    }
    return konstruktor;
}());