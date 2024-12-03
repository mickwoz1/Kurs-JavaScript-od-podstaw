const pracownicy = new Array();
let wybor;

// konstruktor obiektu osoba
function Osoba(imie, nazwisko, numer) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.numer = parseInt(numer);
}

// obiekt do obsługi
const metody = {
    tworzeniePracownika: function(imie, nazwisko, numer){
        let osoba = new Osoba(imie, nazwisko, numer);
        pracownicy.push(osoba);
        console.log(this);
    },
    wyswietlPracownika: function(){
        document.write("Imię: ", this.imie, " Nazwisko: ", this.nazwisko);
    },
    usuwaniePracownika: function(){
        delete pracownicy[this.numer-1];
    }
}

// interfejs
while (wybor != 0) {
    wybor = prompt("Co chcesz zrobić: 1 - dodaj pracownika, 2 - usuń pracownika, 3 - wypisz pracowników, 4 - wyświetl pracownika, 0 - wyjdź");
    switch (wybor) {
        case '1':
            let imie = prompt("Podaj imie");
            let nazwisko = prompt("Podaj nazwisko");
            let numer = prompt("Podaj numer Pracownika");
            let tworzenie = metody.tworzeniePracownika.bind(pracownicy);
            tworzenie(imie, nazwisko, numer);
            break;
        case '2':
            let nrP = parseInt(prompt("Podaj numer pracownika do usunięcia"));
            metody.usuwaniePracownika.apply(pracownicy[nrP]);
            wybor = 0;
            break;
        case '3':
            pracownicy.forEach((e) => {
                console.log(e);
            })
            break;
        case '4':
            nr = parseInt(prompt("Podaj indeks pracownika, którego chcesz wyświetlić?"));
            metody.wyswietlPracownika.call(pracownicy[nr]);
            wybor = 0;
            break;
        default:
            document.write("Nie wybrano odpowiedniej opcji!");
    }
}

console.log(pracownicy);