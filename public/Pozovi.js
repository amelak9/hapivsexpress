function Pozovi(selectVjezbe, selectZadatak)
{
    var ajax = new XMLHttpRequest();
    var vjezba = selectVjezbe.value;
    var zad = selectZadatak.value;
    ajax.open("POST","http://localhost:8080/vjezba/" + vjezba + "/zadatak" , true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("sZadatak=" + zad);
}