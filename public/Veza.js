function Veza(selectZadatak)
{
        var id = document.getElementById("prvii").value;
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function()
        {
            if(ajax.readyState == 4 && ajax.status == 200)
            {
                var odgovor = '';
                var ima;
                var niz = JSON.parse(ajax.response);
                var svi = niz['svi2'];
                var dodijeljeni = niz['dodijeljeni2'];
                for (let i = 0; i < svi.length; i++)
                {
                        ima = false;
                        for (let j = 0; j < dodijeljeni.length; j++)
                        {
                                if (dodijeljeni[j].id == svi[i].id) ima = true;
                        }
                        if (!ima)
                        {
                            odgovor += '<option>';
                            odgovor += svi[i].id;
                            odgovor += '</option>';
                        }
                }
            }           
            selectZadatak.innerHTML = odgovor;
        }
        ajax.open("GET","http://localhost:8080/zadatakk/" + id, true);
        ajax.send();
}