// Prvi zadatak
const users = [
    { id: 1, name: 'Ivan', score: 75 },
    { id: 2, name: 'Pero', score: 90 },
    { id: 3, name: 'Nina', score: 95 },
    { id: 4, name: 'Maja', score: 80 }
  ];
  
  // Zadatak 1
  const userNina = users.find(user => user.name === 'Nina');
  console.log(`Traženi korisnik: ${userNina.name}`);
  console.log('----------------------');
  
  // Zadatak 2
  const highScorers = users.filter(user => user.score >= 90);
  console.log("Korisnici s score >= 90:");
  highScorers.forEach(user => console.log(`${user.name}: ${user.score}`));
  console.log('----------------------');
  
  // Zadatak 3
  const newUser = { id: 5, name: 'Katarina', score: 85 };
  users.push(newUser);
  console.log("Dodan novi korisnik:", newUser);
  console.log('----------------------');
  
  // Zadatak 4
  console.log("Imena i score korisnika:");
  users.forEach(user => console.log(`${user.name}: ${user.score}`));
  console.log('----------------------');
  
  // Zadatak 5
  const totalScore = users.reduce((acc, user) => acc + user.score, 0);
  console.log("Ukupni score:", totalScore);
  console.log('----------------------');
  
  //Drugi zadatak
  //Zadatak 1
  function prviElement(niz) {
    if (niz.length === 0) {
      return "niz je prazan";
    } else {
      return niz[0];
    }
  }
  
  console.log(prviElement([10, 20, 30])); 
  console.log(prviElement([])); 
  console.log('----------------------');
  //Zadatak 2
  function prvihNElemenata(niz, n) {
    if (niz.length === 0) {
      return "niz je prazan";
    } else if (n <= 0) {
      return "n mora biti pozitivan broj";
    } else {
      return niz.slice(0, n);
    }
  }
  
  console.log(prvihNElemenata([10, 20, 30], 2)); 
  console.log(prvihNElemenata([], 3)); 
  console.log(prvihNElemenata([10, 20, 30, 40, 50], 6)); 
  console.log(prvihNElemenata([10, 20, 30, 40, 50], -3));
  console.log('----------------------');
  //Zadatak 3  
  const boje = ['Crvena', 'Plava', 'Žuta', 'Roza'];
    console.log(boje.join(',')); 
    console.log(boje.join('+')); 
    console.log('----------------------');
//Zadatak 4
function makniElement(niz, element) {
    const index = niz.indexOf(element);
    if (index !== -1) {
      niz.splice(index, 1);
      return niz;
    } else {
      return "Element ne postoji.";
    }
  }
  const array = ['Crvena', 'Plava', 'Žuta', 'Roza'];
  console.log(makniElement(array, 'Plava')); 
  console.log(makniElement(array, 'Zelena')); 
  console.log('----------------------');
  //Zadatak 5
  function makniElementPoIndeksu(niz, indeks) {
    if (indeks >= niz.length || indeks < 0) {
      return "Pogrešan indeks";
    } else {
      niz.splice(indeks, 1);
      return niz;
    }
  }
  
  const array1 = ['Crvena', 'Plava', 'Žuta', 'Roza'];
  console.log(makniElementPoIndeksu(array1, 2)); 
  console.log(makniElementPoIndeksu(array1, 5)); 
  console.log('----------------------');

  //Treći zadatak
  //Zadatak 1
  const brojevi = [100, 200, 152, 125, 63];
    const najmanji = Math.min(...brojevi);
    const najveci = Math.max(...brojevi);
    console.log("Najmanji broj:", najmanji); 
    console.log("Najveći broj:", najveci); 
    console.log('----------------------');
    //Zadatak 2
    function generirajVisekratnike(num, length) {
        const visekratnici = [];
        for (let i = 1; visekratnici.length < length; i++) {
          visekratnici.push(num * i);
        }
        return visekratnici;
      }
      console.log(generirajVisekratnike(5, 4)); 
      console.log(generirajVisekratnike(3, 5)); 
      console.log('----------------------');
      //Zadatak 3
      const brojevi1 = [100, 200, 152, 125, 63];

    const noviBrojevi = brojevi1.concat(brojevi1);

    const najmanji1 = Math.min(...noviBrojevi);
    const najveci1 = Math.max(...noviBrojevi);
    console.log("Najmanji broj:", najmanji1); 
    console.log("Najveći broj:", najveci1); 


  