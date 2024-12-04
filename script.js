function gramy(){
    let gracz1 = document.getElementById("gracz1").value;
    let gracz2 = document.getElementById("gracz2").value;

    let pole1 = document.getElementById("a");
    let pole2 = document.getElementById("b");
    let pole3 = document.getElementById("c");
    let pole4 = document.getElementById("d");
    let pole5 = document.getElementById("e");
    let pole6 = document.getElementById("f");
    let pole7 = document.getElementById("g");
    let pole8 = document.getElementById("h");
    let pole9 = document.getElementById("i");

    let polaGraczy = document.querySelectorAll(".gracz");
    polaGraczy[0].value = gracz1;
    polaGraczy[1].value = gracz2;

    document.getElementById("g1").onclick = () => {
        pole1.onclick = () => { pole1.innerText = "X" }
        pole2.onclick = () => { pole2.innerText = "X" }
        pole3.onclick = () => { pole3.innerText = "X" }
        pole4.onclick = () => { pole4.innerText = "X" }
        pole5.onclick = () => { pole5.innerText = "X" }
        pole6.onclick = () => { pole6.innerText = "X" }
        pole7.onclick = () => { pole7.innerText = "X" }
        pole8.onclick = () => { pole8.innerText = "X" }
        pole9.onclick = () => { pole9.innerText = "X" }
    }

    document.getElementById("g2").onclick = () => {
        pole1.onclick = () => { pole1.innerText = "O" }
        pole2.onclick = () => { pole2.innerText = "O" }
        pole3.onclick = () => { pole3.innerText = "O" }
        pole4.onclick = () => { pole4.innerText = "O" }
        pole5.onclick = () => { pole5.innerText = "O" }
        pole6.onclick = () => { pole6.innerText = "O" }
        pole7.onclick = () => { pole7.innerText = "O" }
        pole8.onclick = () => { pole8.innerText = "O" }
        pole9.onclick = () => { pole9.innerText = "O" }
    }
}