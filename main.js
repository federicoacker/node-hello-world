import { cowsay } from "cowsayjs";
import askClaude from "./functions/askClaude.js";
import options from "./functions/getOptions.js";

askClaude(options)
.then(response => console.log(cowsay(response)))
.catch(error => console.error(error));