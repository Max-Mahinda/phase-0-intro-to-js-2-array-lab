// Write your solution here!

destructivelyPrependCat('Bob');


function destructivelyRemovelastcat(){
    return cats.pop();
}

function destructivelyRemoveFirstcat(){
    return cats.shift();
}
destructivelyRemoveFirstcat();
function appendCat(name){
    return[...cats,name];
}
appendCat("broom");

function prependCat(name){
    return[name, ...cats];
}
prependCat("Arnold");

function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
removeLastCat();

function removeFirstCat(){
    return cats.slice(1);
}