console.log("hello world");
// the global object is a special object that is available in all JavaScript environments. It provides a way to access global variables and functions. In a browser environment, the global object is called "window", while in a Node.js environment, it is called "global". The global object contains properties and methods that are available throughout the entire JavaScript code, regardless of where it is executed.

console.log(global);

//console.log(document);
// this will throw an error because "document" is not defined in a Node.js environment. The "document" object is part of the browser's DOM (Document Object Model) and is not available in a server-side environment like Node.js.

// console.log(process); 
// this will log the "process" object, which is a global object in Node.js that provides information about the current Node.js process and allows you to interact with it. It contains properties and methods for working with the environment, handling signals, and managing the process's lifecycle.