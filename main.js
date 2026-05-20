
import askClaude from "./functions/askClaude.js";
import options from "./functions/getOptions.js";

askClaude(options)
.then(response => console.log(response))
.catch(error => console.error(error));