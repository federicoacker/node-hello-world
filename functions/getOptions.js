process.argv.shift();
process.argv.shift();
const argumentArray = process.argv;

const options = {
    command: "",
    category: "",
    asciifyTargetPath: "",
}

if(argumentArray.includes("--pokemon")){
    getAsciifyOptions();
}
else{
    getAiOptions();
}

function getAsciifyOptions() {
    for(let i = 0; i < argumentArray.length; i++){
        const current = argumentArray[i];
        if(current.startsWith("--")){
            options.command = current;
        }
        else{
            options.asciifyTargetPath = current;
        }
    }

}

function getAiOptions() {

for(let i = 0; i < argumentArray.length; i++){
    const current = argumentArray[i];
    if(current.startsWith("--") && !current.includes("=")){
        options.command=current;
    }
    if(current.startsWith("--category=")){
        options.category=current.split("=")[1];
    }
}
}

export default options;