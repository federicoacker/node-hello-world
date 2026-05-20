import asciify from "asciify-image";
import options from "./getOptions.js";

function getImages(){
    const pathArray = [];
    console.log(options.asciifyTargetPath);
    const imageOptions = {
        fit:"box",
        width:150,
        height:50
    }
    
    for(let i = 1; i<6; i++){
        const current = `${options.asciifyTargetPath}/${i}.png`;
        pathArray.push(current);
    }

    for(const path of pathArray){
        asciify(path, imageOptions, (error, asciifiedImage) => {
            if(error){
                throw new Error(error);
            }

            console.log(asciifiedImage);
            console.log("\n\n\n");
        })
    }
}

export default getImages;