import { cowsay } from "cowsayjs";
import getImages from "./functions/getImages.js";
import askClaude from "./functions/askClaude.js";
import options from "./functions/getOptions.js";
import animals from "./functions/animals.js";

if(options.command !== "--pokemon"){
    let animal = "default";
    if(animals[options.animal]){
        animal=options.animal;
    }
    askClaude(options)
    .then(response => console.log(cowsay(response, {cow:animal})))
    .catch(error => console.error(error));
}
else{
    getImages();
}