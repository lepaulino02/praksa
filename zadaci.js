/*Zadaci 1*/
/*Prvi Zadatak*/
let num1 = '1';
/*Drugi Zadatak*/
let symbols = 'Niz Znakova';
/*Treci Zadatak*/
let symbols2 = '3.14';
/*Cetvrti Zadatak*/
let symbols3 = 'dva redka';
/*Peti Zadatak*/
let logic = true;
/*šesti Zadatak*/
console.log(num1,symbols,symbols2,symbols3,logic);
/*Sedmi Zadatak*/
 logic = false;
 console.log(logic);
 /*Osmi Zadatak*/
 let num2= '25';
 /*Deveti Zadatak*/
 let num3= num1*num2;
 /*Deseti Zadatak*/
 console.log(num3);
 /*Jedanaesti Zadatak*/
 const obj = {
    ime: 'Paulo',
    prezime: 'Katana',
    zanimanje: 'Student',
    godrod: '2002',
    hobi: ['nogomet','podvodni_ribolov']
    }
/*Dvanaaesti Zadatak*/
console.log(obj.hobi[1]);
/*Trinaesti Zadatak*/
obj.prezime='Horvat';
obj.zanimanje='Vatrogasac';
/*Četrnaesti Zadatak*/
console.log(obj);

/*Zadaci 2*/ 
/*Prvi Zadatak*/
function ispis(a) {
    console.log(a);
}
function udaljenost(a,b){
    return (2*(a+b));
}
/*Drugi Zadatak*/
ispis("Pravokutnik je geometrijsko tijelo");
/*Treći Zadatak*/
const rezultat = udaljenost(20,30);
console.log(rezultat);
/*Četvrti Zadatak*/
ispis(rezultat);

/*Zadaci 3*/
/*Prvi Zadatak*/
function provjera(a){
    if(a%2==0){
        console.log("paran");
    }
    else{
        console.log("neparan");
    }
}
/*Drugi Zadatak*/
provjera(5);
provjera(6);
/*Treći Zadatak*/
function raspon(a){
    if(a>=0 && a<=10){
        console.log("Broj je u rasponu od 1-10")
    }
    else if(a>=11 && a<=100){
        console.log("Broj je u rasponu od 11-100")
    }
    else{
        console.log("Broj je veči od 100")
    }
    }
    /*Četvrti Zadatak*/
    raspon(5);
    raspon(13);
    raspon(200);

    /*Zadaci 4*/
    /*Prvi Zadatak*/
    for (let i = 1; i <= 10; i++) {
        console.log("For Redak: " + i);
    }
    console.log("--------------------------" );
    /*Drugi Zadatak*/
    let i = 1;
while (i <= 10) {
    console.log("While Redak: " + i);
    i++;
}
console.log("--------------------------" );
/*Treči Zadatak*/
for (let i = 1; i <= 10; i += 2) {
    console.log("Redak: " + i);
}
console.log("--------------------------" );

/*Peti Zadatak*/
/*Prvi Zadatak*/
function zbrajanje(n) {
    let zbroj = 0;
    for (let i = 1; i <= n; i++) {
        zbroj += i;
    }
    return zbroj;
}
    console.log(zbrajanje(5)); 
    console.log(zbrajanje(10)); 
    console.log("--------------------------" );
/*Drugi Zadatak*/
function najveciZajednickiDjelitelj(a, b) {
    if (b === 0)
        return a;
    return najveciZajednickiDjelitelj(b, a % b);
}
console.log(najveciZajednickiDjelitelj(24, 36)); 
console.log(najveciZajednickiDjelitelj(17, 23)); 
console.log("--------------------------" );
/*Treči Zadatak*/
function jePalindrom(string) {
    string = string.replace(/[^a-zA-Z]/g, '').toLowerCase();
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(jePalindrom("ana")); 
console.log(jePalindrom("jabuka")); 
console.log(jePalindrom("A man, a plan, a canal, Panama")); 
console.log("--------------------------" );
/*Četvrti Zadatak*/
function brojSamoglasnika(string) {
    string = string.toLowerCase();
    const samoglasnici = new Set(['a', 'e', 'i', 'o', 'u']);
    let brojac = 0;
    for (let i = 0; i < string.length; i++) {
        if (samoglasnici.has(string[i])) {
            brojac++;
        }
    }
    return brojac;
}
console.log(brojSamoglasnika("Paulo")); 
console.log(brojSamoglasnika("Adricom")); 
console.log(brojSamoglasnika("rhythm")); 
console.log("--------------------------" );
/*Peti Zadatak */
function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(celsiusToFahrenheit(0)); 
console.log(celsiusToFahrenheit(100)); 

console.log(fahrenheitToCelsius(32)); 
console.log(fahrenheitToCelsius(212)); 







    

       







