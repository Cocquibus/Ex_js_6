let monTab = ['pomme', 'fraise', 'melon', 'citron'];
monTab.splice(0,1);

console.log(monTab[0]);

monTab.push("testfin");
monTab.unshift("testdebut");

console.log(monTab);

monTab[1] = monTab[1].toUpperCase();
console.log(monTab[1]);

let a = monTab[1];
monTab[1] = monTab[2];
monTab[2] = a;
console.table(monTab); 


let tableau = [4,5,2,1,3];

for(i=0;i<4;i++){
    if(tableau[i] > tableau[i+1]){
        let a = tableau[i+1];
        tableau[i+1] = tableau[i];
        tableau[i] = a;
        i = -1;
    }
}
console.table(tableau);

let b =[];
let c =[];
for(i=0;i<tableau.length;i++){
    b += "-" + tableau[i];
}
console.log(b);
console.log(b.replaceAll("-",""));
b = b.replaceAll("-","");
console.log(b);

for(i=0;i<b.length;i++){
    c[i] = b.substr(i,1);
}
console.log(c);

let d = [1,2,3,4,5,6,7,8,9,10];

console.log(d + " " + d.length);

for(i=1;i<d.length + 1;i++){
    console.log(d.indexOf(i))
}
d.splice(2,1)
console.log(d)