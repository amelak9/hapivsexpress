function studentiAjax (divSadrzaj)
{
        var ajax = new XMLHttpRequest();
        var id = document.getElementById("listica").value;
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
                    odgovor += '<p>'+niz[i].imePrezime+'</p>';
                    odgovor += '<p> Index:'+niz[i].index+'</p>';
                    odgovor += '</div>';
                    odgovor += '</li>';
                }
                odgovor += '</ul>';

                if (niz.length == 1 && niz[0].imePrezime == '') odgovor = '';

                divSadrzaj.innerHTML = odgovor;
            }
        }
        ajax.open("GET","http://localhost:8080/studenti/" + id , true);
        ajax.send();
        
    }