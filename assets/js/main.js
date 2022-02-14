let adresse = ["Cstraße 100", "80526", "München", "Bayern"]
let freunde = ["Miriam", "Andi"]
let person = ["Karin", "Löffler", "kalö", "33", "stricken", "Coburg", "Fullstack"]

console.log(adresse);
console.log(freunde);
console.log(person);



console.log(person);


console.log(adresse.length);
console.log(freunde.length);
console.log(person.length);


let meinTrainer1 = ["Eric", "Simon", "Steffen"];
console.log(meinTrainer1);

let meineTrainer2 = new Array("Eric", "Simon")

console.log(meineTrainer2);


let meineTrainer3 = new Array();
meineTrainer3[0] = "Meike";
meineTrainer3[1] = "Klaus";
meineTrainer3[2] = "Doris";
console.log(meineTrainer3);

let numberArray = [5,6,7,8,9,10]
console.log(numberArray[4]);

// Deklariere Variablen meinText1, meinText2, meinText3.
// Definiere die Variable meinText1 mit dem Wert: 
// Definiere die Variable meinText2 mit dem Wert: 
// Definiere die Variable meinText3 mit dem Wert: 

// Deklariere Variablen: split1, split2, split3.
// Definiere die Variable split1 mit dem Wert: meinText1.split();
// Definiere die Variable split2 mit dem Wert: meinText1.split("");
// Definiere die Variable split3 mit dem Wert: meinText1.split(" ");

// Teste auch zwei weitere Variablen meinText2 und meinText3.

let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag."
let meinText2 = "Wie geht es dir heute?"
let meinText3 = "Heute ist ein großer Tag für uns."

let split1 = meinText1.split();
console.log(split1);
let split2 = meinText1.split("");
console.log(split2);
let split3 = meinText1.split(" ");
console.log(split3);

let songs = ["Bohemian", "Heaven", "California"]
songs.push("Sweet Child");
console.log(songs);

let heroUndEnemy = [
  ["Batman", "The Joker", "Professor X"],
  ["THor", "Loki"],
  ["Spiderman"]
]
console.log(heroUndEnemy);

console.log(songs);
entfernterSong = songs.pop();
console.log(songs);
console.log(entfernterSong);

let deutscheGerichte = ["Speckkuchen", "Quarkkeulchen", "Thüringer"] 
deutscheGerichte.unshift("Knödel")
console.log(deutscheGerichte);

let nichtgut = deutscheGerichte.shift()
console.log(nichtgut);

let irgendwelcheZahlen = [34, 57, 3, 98]
irgendwelcheZahlen.push(5,88,2)
console.log(irgendwelcheZahlen);

irgendwelcheZahlen.unshift(1, 2);
console.log(irgendwelcheZahlen);

irgendwelcheZahlen.pop();
console.log(irgendwelcheZahlen);
irgendwelcheZahlen.shift();
console.log(irgendwelcheZahlen);


let array = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg",
];

let delImg1 = array.splice(4, 4);

console.log(array);
console.log(delImg1);

let delImg2 = array.splice(6,5);

console.log(array);
console.log(delImg2);

let delImg3 = delImg1.splice(0,4) + delImg2.splice(0,5)
console.log(delImg3);

let array2 = [ 
  "imageTeilnehmer000supercode.jpg", 
  "imageTeilnehmer001supercode.jpg" 
];
console.log(array2);

// Syntax: array.splice(index, Anzahl der zu löschenden Elemente, Element, Element);

array2.splice(2, 0, 
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg")
  ;

console.log(array2);

let array3 = [
  "imageTeilnehmer000supercode.jpg",
  "imageTeilnehmer001supercode.jpg",
  "imageTeilnehmer002supercode.jpg",
  "imageTeilnehmer003supercode.jpg",
  "imageTeilnehmer004supercode.jpg",
  "imageTeilnehmer005supercode.jpg",
  "imageTeilnehmer006supercode.jpg",
  "imageTeilnehmer007supercode.jpg",
  "imageTeilnehmer008supercode.jpg",
  "imageTeilnehmer009supercode.jpg",
  "imageTeilnehmer010supercode.jpg",
  "imageTeilnehmer011supercode.jpg",
  "imageTeilnehmer012supercode.jpg",
  "imageTeilnehmer013supercode.jpg",
  "imageTeilnehmer014supercode.jpg",
  "imageTeilnehmer015supercode.jpg",
  "imageTeilnehmer016supercode.jpg",
  "imageTeilnehmer017supercode.jpg",
  "imageTeilnehmer018supercode.jpg",
  "imageTeilnehmer019supercode.jpg",
];

let arrayNeu = array3.slice();
console.log(arrayNeu);


let copyImg1 = array3.slice(7,15);
console.log(copyImg1);
console.log(array3);

