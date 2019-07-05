function godinaselect(selectGodine)
{
        var ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function()
        {
            if(ajax.readyState == 4 && ajax.status == 200)
            {
                var odgovor2 = '';
                var niz = [];
                niz = JSON.parse(ajax.response);
                var godine = niz['nizGodina'];

                for (i = 0; i < godine.length; i++)
                {
                    odgovor2 += '<option>';
                    odgovor2 += godine[i].id;
                    odgovor2 += '</option>';
                }
            }
           
            selectGodine.innerHTML = odgovor2;
        }
        ajax.open("GET","http://localhost:8080/pomozi" , true);
        ajax.send();
}