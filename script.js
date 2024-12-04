function gramy(){
    let gracz1 = document.getElementById("gracz1").value;
    let gracz2 = document.getElementById("gracz2").value;

    let polaGraczy = document.querySelectorAll(".gracz")
    polaGraczy[0].value = gracz1;
    polaGraczy[1].value = gracz2;
}