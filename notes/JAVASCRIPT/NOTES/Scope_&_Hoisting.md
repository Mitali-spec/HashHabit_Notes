# JavaScript Scope & Hoisting (Basic Notes)



# Scope

 Scope means where a variable can be accessed.

# There are three types of scope in JavaScript:

1. Global Scope
2. Local (Function) Scope
3. Block Scope



# Global Scope


 A variable declared at the top level of a file
 is in the global scope.
 Global variables are accessible everywhere.


# Example:


 let x = 10;
 This variable can be accessed inside functions,
 blocks, and anywhere in the file.



# Local (Function) Scope


 A variable declared inside a function
 is only accessible inside that function.

# Example:


 function test() {
   let y = 5;
 }

y cannot be accessed outside the function.




# Block Scope


 Block scope is created using curly braces { }.
 Variables declared using let and const
 exist only inside that block.

# Example:


 if (true) {
   let a = 10;
 }

a is NOT accessible outside the block.



# Why var is dangerous


var is NOT block scoped.

 When a variable is declared using var,
 it escapes the block and becomes accessible outside.

# Example:


 if (true) {
   var b = 20;
 }


 b is accessible here, which can cause bugs.


 Because of this behavior,
 it is NOT a good practice to use var.

 We should prefer let or const to avoid confusion.



# Hoisting


 Hoisting means JavaScript moves variable
 declarations to the top before running the code.


# Important:


Only the declaration is moved,
NOT the value assignment.



# Hoisting with var


# Example:

 console.log(x);
 var x = 10;

# Expected:    Error


# Actual:       undefined



# JavaScript treats the code like this:


 var x;

 console.log(x); // undefined

 x = 10;



# Hoisting with let


# Example:

 console.log(y);

 let y = 5;


# Result :        Error


# This happens because let does not allow
# access to the variable before declaration.



# Final Definition of Hoisting


 Hoisting is JavaScript's behavior of moving
 variable declarations to the top of the scope
 before executing the code.
