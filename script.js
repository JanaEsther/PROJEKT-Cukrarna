console.log('%c ProjektCukrarna', 'background:black;color:yellow;');
//document.querySelector
//vybere prvek na stránce pomocí CSS selektoru
//pokud výběru odpovídá více prvků, vrátí se nám jenom ten první

//window
//
//vybíráme podle HTML značky
//textContent - pokud chceme pouze změnit text, je to jednodušší a bezpečnější
const nadpis = document.querySelector('h1')
nadpis.textContent = 'Místo pro váš sladký sen';
console.log(nadpis)

//změna HTML obsahu
// pokud v obsahu potřebujeme HTML značky
//v HTML se interpretují i HTML značky
//problém může pokud tam vkládáme něco, co třeba nám zadal uživatel a nevíme přesně co do toho
//textu napíše
const hero = document.querySelector('.hero-text')
hero.innerHTML = 'Z naší nabídky produktů si vybere <strong>každý</strong>. Nezapomeňte si čas od času dopřát něco nového.' 
console.log(hero);

const odstavec1 = document.querySelector('p')
console.log(odstavec1)
//vybíráme podle ID
//const odstavec3 = document.querySelector('#dort')
//console.log(odstavec3)

//selectory mohou být libovolně složité

const odstavec4 = document.querySelector('section p')
console.log(odstavec4)

//const odrazka = document.querySelector('li: nth-child(3)')
//console.log(odrazka);


//querySelector uvnitř jiného prvku
const sekce = document.querySelector('section');
console.log(sekce);

//nemusíme hledat uvnitř celého dokumentu,
//ale můžeme hledat vnitř jiného prvku

const odstavec2 = sekce.querySelector('p');
console.log(odstavec2);

//const obsah = prompt('Zadej text:');
//odstavec1.innerHTML = obsah;

const obrazek = document.querySelector('#foto-peceni');
obrazek.src = 'images/kokos-puding-kolac.jpg';

//const odkaz = document.querySelector('a');
//odkaz.href = 'https://www.seznam.cz';
//odkaz.title= 'Toto vede na seznam';
//prvek.nazev  atributu - můžeme měnit jakýkoliv atribut jakéhokoliv prvku

//Nastavení CSS vlasností prvku

let nadpis2 = document.querySelector('h3');
nadpis.style.color = 'hotpink';
// místo pomlčky se píše velké písmeno

//let popisy = document.querySelector('h3');
//nadpis.style.backgroundColor = 'lightpink';
//všechny hodnoty v uvozovkách jako textový řetězec
const odstavec = document.querySelector('p');
odstavec.style.fontSize = '24px';

//className
const odstavecx = document.querySelector('.seznam');
console.log(odstavec.className);//vlastnost className




//classList
//add, remove, toggle