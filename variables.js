//In Javascript to declare a variable we use keywords

// keywords:
    // var
    // let 
    // const

//todo var
var a // declaration of a variable
console.log(a); // undefined

a = 10; // initialisation of a variable
console.log(a);

a = "salman"; // re-initialisation of a variable
console.log(a);

var a = 100; // re-declaration of a variable 
console.log(a);

//todo let 
let x;
console.log(x);
x = 10;
console.log(x);
x = 20;
console.log(x);

//let x ; //!Uncaught SyntaxError: Identifier 'x' has already been declared 
// in let keyword re-declaration of a variable  is not possible.
// in let we cannot re-declare a variable which is already declared


//todo const:
// const c; //!Uncaught SyntaxError: Missing initializer in const declaration
const c = 10;
console.log(c);

//c = 30; //!Uncaught TypeError: Assignment to constant variable.
//In const we can declare and intilise a varaibale at the same time 
// re-intailisations and redeclarations are not paosssible in const
