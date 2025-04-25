/*
let vārds = prompt("Ievadi savu vārdu")
let vecums = prompt("Ievadi savu vecumu")
let irPilsonis = prompt("Vai esi pilsonis? (jā/nē)")

console.log ("Vards:", vārds)
console.log ("Vecums:", vecums)
console.log ("Pilsonis", irPilsonis)

if (vecums >=18 %% irPilsonis)
{
    console.log ("var balsot")
}
 
else if (vecums < 18 && !irPilsonis)
{
    console.log ("nevar balsot, nav 18 un nav pilsonis")
}
else if (vecums >=18 && !irPilsonis)
{
    console.log ("ir 18 bet nav pilsonis")
}
    */
let atzīme = prompt("Ieraksti atzīmi (0-100)")
if (atzīme >=90 && <=100) {
    console.log ("Izcili")
}
else if (atzīme >=70) {
    console.log ("Labi")
}
else if (atzīme >=50) {
    console.log ("Vidēji")
}
else if (atzīme >=0) {
    console.log ("Slikti")
}