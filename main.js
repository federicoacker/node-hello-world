import { cowsay } from "cowsayjs";
import getImages from "./functions/getImages.js";
import askClaude from "./functions/askClaude.js";
import options from "./functions/getOptions.js";


if(options.command !== "--pokemon"){
    askClaude(options)
    .then(response => console.log(cowsay(response)))
    .catch(error => console.error(error));
}
else{
    getImages();
}