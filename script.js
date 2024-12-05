const przyciski = document.querySelectorAll(".gameButton");
let g1 = document.querySelector("#g1");
let g2 = document.querySelector("#g2");
let gracz;

window.addEventListener("load", function(){
    document.querySelector("#start").addEventListener("click", gramy)
})

function gramy(){
    console.log("Wybierz gracza");
    // wprowadzamy imiona
    let graczPierwszy = document.querySelector("#gracz1").value;
    let graczDrugi = document.querySelector("#gracz2").value;
    
    g1.value = graczPierwszy + " X";
    g2.value = graczDrugi + " O";

    g1.addEventListener("click", function(){
        gracz = 'X';
        g1.setAttribute("style", "border:  2px solid black;");
        g2.setAttribute("style", "border:  none;");
        zaznaczGracza();
    })

    g2.addEventListener("click", function(){
        gracz = 'O';
        g2.setAttribute("style", "border:  2px solid black;");
        g1.setAttribute("style", "border:  none;");
        zaznaczGracza();
    })
}

function zaznaczGracza(){
    for(let p of przyciski){
        p.addEventListener("click", function(e){
            if(e.target.innerText != 'X' && e.target.innerText != 'O'){
                document.getElementById(e.target.id).innerHTML = gracz; // wstawia znak
            }
        })
    }
}

/*function gramy(){
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
        graczPierwszy();

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
        graczDrugi();

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
}*/