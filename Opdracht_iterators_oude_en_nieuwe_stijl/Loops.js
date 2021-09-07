const colors = ["yellow", "blue", "red", "orange"];
let i = 0;
let text = "";

// While loop
while (colors[i]) {
    text += colors[i] + "<br>";
    i++;
    console.log(colors[i])
    if (colors == "orange") {
        break;
    }
}

// For loop
for (let j = 0; j < colors.length; j++) {
    console.log(colors[j])
}

// forEach method

colors.forEach(element => console.log(element));

// Overige vragen:

// Vraag 1: Hoeveel regels neemt mijn for loop en mijn while loop in beslag?
// Mijn for en while loop nemen gemiddeld tussen de 3 en de 6 regels in beslag.

// Vraag 2: Hoeveel regels neemt mijn forEach method in beslag?
// De forEach method neemt 1 regel in beslag.

/* Vraag 3: Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. 
een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker 
leesbaar? Waarom? */ 
// De forEach method maakt het erg gemakkelijk om een array uit te lezen.
// Tijdens een project zou dit mijn voorkeur hebben, omdat het mijn code makkelijk leesbaar houd
// en het bespaart tijd en neemt minder regels in beslag.

/* Vraag 4: Kun je een array method gebruiken op een object? Het antwoord is nee.
Stel je hebt een object met 45 properties. Probeer eens uit te zoeken (gebruik Google) hoe je tóch die 45 properties kunt console.loggen met een loop: Looping through the properties of an object.
Probeer dit stukje code uit en gebruik hier een object met 5 properties voor. Ben je nu aan het itereren? */

const object = { a: 1, b: 2, c: 3, d: 4, e: 5 };

for (const property in object) {
    console.log(`${property}: ${object[property]}`);
}

// Antwoord: Ja, je bent nu aan het itereren over een object.