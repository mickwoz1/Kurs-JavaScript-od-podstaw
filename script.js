const pracownicy = new Array();
let wybor;

// konstruktor obiektu osoba
function Osoba(imie, nazwisko) {
    this.imie = imie;
    this.nazwisko = nazwisko;
}

// funkcja tworząca pracowników
function tworzenie(imie, nazwisko) {
    const pracownik = new Osoba(imie, nazwisko);
    pracownicy.push(pracownik);
}

// funkcja usuwająca pracowników
function usuwanie(nr) {
    delete pracownicy[nr];
}

// interfejs
while (wybor != 0) {
    wybor = prompt("Co chcesz zrobić: 1 - dodaj pracownika, 2 - usuń pracownika, 3 - wypisz pracowników, 0 - wyjdź");
    switch (wybor) {
        case '1':
            let imie = prompt("Podaj imie");
            let nazwisko = prompt("Podaj nazwisko");
            tworzenie(imie, nazwisko);
            break;
        case '2':
            let numer = parseInt(prompt("Podaj numer pracownika do usunięcia"));
            usuwanie(numer);
            break;
        case '3':
            pracownicy.forEach((e) => {
                console.log(e);
            })
            break;
        default:
            document.write("Nie wybrano odpowiedniej opcji!");
    }
}

console.log(pracownicy);