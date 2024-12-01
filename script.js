const samochody = [
    {
        marka: 'Opel',
        model: 'Astra',
        przebieg: 120000,
        cena: 10000,
        ilosc: 3
    },
    {
        marka: 'Opel',
        model: 'Vectra',
        przebieg: 200000,
        cena: 15000,
        ilosc: 5
    },
    {
        marka: 'Opel',
        model: 'Corsa',
        przebieg: 300000,
        cena: 20000,
        ilosc: 2
    },
    {
        marka: 'Opel',
        model: 'Insignia',
        przebieg: 400000,
        cena: 25000,
        ilosc: 1
    },
    {
        marka: 'Opel',
        model: 'Astra',
        przebieg: 500000,
        cena: 30000,
        ilosc: 4
    },
    {
        marka: 'Opel',
        model: 'Vectra',
        przebieg: 600000,
        cena: 35000,
        ilosc: 6
    },
    {
        marka: 'Opel',
        model: 'Corsa',
        przebieg: 700000,
        cena: 40000,
        ilosc: 7
    },
    {
        marka: 'Opel',
        model: 'Insignia',
        przebieg: 800000,
        cena: 45000,
        ilosc: 8
    },
    {
        marka: 'Opel',
        model: 'Astra',
        przebieg: 900000,
        cena: 50000,
        ilosc: 9
    },
    {
        marka: 'Opel',
        model: 'Vectra',
        przebieg: 1000000,
        cena: 55000,
        ilosc: 10
    }
];

const modyfikacjaCen = samochody.map(function(e){
    return e.cena * 1.2
})