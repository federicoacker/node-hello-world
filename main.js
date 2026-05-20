import { cowsay } from "cowsayjs";
import askClaude from "./functions/askClaude.js";
import options from "./functions/getOptions.js";


if(options.command !== "--asciify"){
    askClaude(options)
    .then(response => console.log(cowsay(response)))
    .catch(error => console.error(error));
}

console.log(options);