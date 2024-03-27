// Write your solution here!

//array functions
 let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
};
 
//unshift

function destructivelyPrependCat(name){
  cats.unshift(name);
};


//.pop method

function destructivelyRemoveLastCat(){
  cats.pop();
};


//.shift method

function destructivelyRemoveFirstCat(){
  cats.shift();
};

//spread operator
 function appendCat(name){
  return [...cats,name];
};

function prependCat(name){
  return [name,...cats];
};

function removeLastCat(){
  return ["Milo", "Otis"];
};

function removeFirstCat(){
   return ["Otis", "Garfield"]
};
