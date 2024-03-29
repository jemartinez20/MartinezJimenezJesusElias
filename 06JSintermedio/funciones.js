/*
Las variabnles que se usan dentro de js son 3 tipos
var -> de acuerdo a EJS6 esta siendo sustituida, pero es de uso ,as comn para determinar una variable de acceso publico.

let -> es una variable protegida yq eu solo funciona dentro de una funcion o declaracion de codigo.

const -> la cual es un valor constante en todo el documento.


const x = "x";
if(true){
    let x = "y";
    console.log(x);
}
console.log(x);

*/

//funciones flecha es un funcion en js que a diferencia de una funcion normal no genera su propio contexto (this) necesita ser declarada antes de ser usada y no necesita un return
//normal
/*
function sumarFuncioNormal(n1, n2){
    return n1+n2;
}

console.log(`vamos a sumar 3 y 5: ${sumarFuncionNormal(3,5)}`);

/*
una funcion flecha tiene ka siguiente estructura:
"cadena"-> id, clase, name, atributo

*/
/*
const sumaFuncionFlecha =(n1,n2) => n1+n2;

console-log(`vamos a sumar 7 y 5: ${sumaFuncionFlecha(7,5)}`);

*/

const razasdePerro=[
    "Gran Danes",
    "Pastor Aleman",
    "Chihuahua",
    "Belga",
    "Pitbul",
    "Dalmata",
    "San Bernardo"
];
/*
for(let indice = 0; indice < razasdePerro.length; indice++){
    console.log(razasdePerro[indice]);
}
*/

//for of
/*
for(const raza of razasdePerro){
    console.log(raza);
}


//for in
for(const indice in razasdePerro){
    console.log(razasdePerro);
    console.log(razasdePerro[indice]);
}



//forEach es iterar sobre los elementos del arreglo, que no devuelve nada y en realidad es una funcion flecha

razasdePerro.forEach((raza,indice,arregloOriginal) => console.log(raza));

razasdePerro.forEach((raza) => console.log(raza));



//funcion MAP sirve para iterar sobre los elementos de un arreglo y regresar un arreglo diferente con el cual se pueden hacer operaciones

const razasdePerroEnMayusculas = razasdePerro.map((raza)=>console.log(raza.toUpperCase()));
const razasdePerroEnMinusculas = razasdePerro.map((raza)=>console.log(raza.toLowerCase()));

*/

//FIND nos permite buscar un elemento dentro del arrogle y si lo encuentra lo regresa y sino lanza un "undefinend"

if(razasdePerro.find((raza)=> raza === "Pug")){
    console.log("la raza se encuentra en el arreglo");
    console.log(razasdePerro);
}else{
    //hay que meterlo
    razasdePerro.push("Pug");
    console.log(razasdePerro)
}

//FINDINDEX

const indiceChihuahua = razasdePerro.findIndex((raza)=> raza === "Chihuahua");

if(indiceChihuahua > -1){
    console.log(razasdePerro[indiceChihuahua]);
    //aparte voy agregar que la raza es pequeña
    razasdePerro[indiceChihuahua] += "(raza pequeña de perro)";
    console.log(razasdePerro[indiceChihuahua]);
    //diferencia sin el indice
    console.log(razasdePerro)
}else{
    console-log("No esta esa raza");
}
