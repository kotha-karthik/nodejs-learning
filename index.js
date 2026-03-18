// common js importing
/*const {generateRandomNumber,celciusToFahrenheit}=require('./utils');
console.log(`Random Numbers: ${generateRandomNumber()}`);
console.log(`Temperature in Fahrenheit: ${celciusToFahrenheit(25)}`);
*/
//-----------------------------------------------------------------------

// module js importing

import getPost,{getPostLength} from "./postController.js";

console.log(getPost());
console.log(getPostLength());

