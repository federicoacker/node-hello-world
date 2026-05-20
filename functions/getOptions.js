
const argumentArray = process.argv.splice(2);

const options = {
    command: "",
    category: "",
}

for(let i = 0; i < argumentArray.length; i++){
    const current = argumentArray[i];
    console.log(current);
    if(current.startsWith("--") && !current.includes("=")){
        options.command=current;
    }
    if(current.startsWith("--category=")){
        options.category=current.split("=")[1];
    }
}

export default options;