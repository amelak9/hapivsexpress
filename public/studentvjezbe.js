function studentvjezbe(selectStudenti, selectGodine, selectVjezbe, selectZadaci )
{
    
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function()
        {
            if(ajax.readyState == 4 && ajax.status == 200)
            {
                var odgovor = '';
                var odgovor2 = '';
                var odgovor3 = '';
                var odgovor4 = '';
                var niz = [];
                niz = JSON.parse(ajax.response);
                var godine = niz['nizGodina'];
                var vjezbe = niz['nizVjezbi'];
                var zadaci = niz['nizZadataka'];
                var studenti = niz['nizStudenti'];


                for (i = 0; i < godine.length; i++)
                {
                    odgovor += '<option>';
                    odgovor += godine[i].id;
                    odgovor += '</option>';
                }
                for (i = 0; i < vjezbe.length; i++)
                {
                    odgovor2 += '<option>';
                    odgovor2 += vjezbe[i].id;
                    odgovor2 += '</option>';
                }
                for (i = 0; i < zadaci.length; i++)
                {
                    odgovor3 += '<option>';
                    odgovor3 += zadaci[i].id;
                    odgovor3 += '</option>';
                }
                for (i = 0; i < studenti.length; i++)
                {
                    odgovor4 += '<option>';
                    odgovor4 += studenti[i].id;
                    odgovor4 += '</option>';
                }
            }
           
            selectStudenti.innerHTML = odgovor4;
            selectGodine.innerHTML = odgovor;
            selectVjezbe.innerHTML = odgovor2;
            selectZadaci.innerHTML = odgovor3;
        }
        ajax.open("GET","http://localhost:8080/pomozi" , true);
        ajax.send();


}


