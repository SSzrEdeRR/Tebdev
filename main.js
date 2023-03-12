/*
function ocena(ocena_ucznia) {
const ocena = Number (prompt("podaj ocene"))

if (ocena == 1) {
    console.log("Ocena Niedostateczna")
    return ocena_ucznia
}
else if (ocena == 2 ) {
    console.log("Ocena Dospuszczająca")
    return ocena_ucznia
}
else if (ocena == 3 ) {
    console.log("Ocena Dostateczna")
    return ocena_ucznia
}
else if (ocena == 4 ) {
    console.log("Ocena Dobra")
    return ocena_ucznia
}
else if (ocena == 5 ) {
    console.log("Ocean Bardzo Dobra")
    return ocena_ucznia
}
else if (ocena == 6 ) {
    console.log("Ocena Celująca")
    return ocena_ucznia
}
else {
    console.log("Nie ma takiej wartosci")
    }
}
*/

/*
function mnozenie (a,a,a,a,a,a,a,a,a,a) {
    return a*a*a*a*a*a*a*a*a*a
}
console.log( mnozenie(10, 10, 10, 10, 10, 10, 10, 10, 10, 10))
*/

/*
const liczba = Number( prompt("Podaj cyfre") );

if (liczba % 2 === 0 ) {
    console.log("liczba jest parzysta")
}
else {
    console.log("liczba jest nieparzysta")
}




for (let i = 0; i <= 100; i++) {

    if (i % 3 == 0) {

        if (i % 5 == 0) {
            console.log("FizzBuzz")
        }
        else {
            console.log("Fizz")
        }

    }
    else if(i % 5 == 0) {
        console.log("Buzz")
    }
    
    else {
        console.log(i)
    }
}

*/


const tablica = [1,8,32,30,56,22,46,10,4,24,70,45,0,0,25]

function zmienna(tab) {
    for(let a in tab) {
        if( tab[a] == 0 ) {
            tab[a] = 1

        }
    }

    tab.sort((a,b) => {return a - b})
    console.log(tab)
}
zmienna(tablica)








