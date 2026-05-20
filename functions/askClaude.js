
import { ChatAnthropic } from "@langchain/anthropic";
import animals from "./animals.js";




function askClaude(options) {
    const { command, category } = options;
    let animal = "mucca"
    if(animals[options.animal]){
        animal=options.animal
    }
    const systemPrompt = (
["system", `Sei un ${options.animal}, un vero e proprio ${options.animal}, che ha di recente 
imparato a parlare la lingua umana ma 
si esprime ancora con i suoi versi animali di 
tanto in tanto`])

    if (command.trim() === "" || category.trim() === "") {
        throw new Error("Hai dimenticato i comandi --comandoASceltaTua --category=scegliUnaCategoria");
    }

    const humanPrompt = ["human", `Ciao Claude, raccontami una ${command} riguardo a ${category}`];

    const model = new ChatAnthropic(
        {
            model: "claude-haiku-4-5-20251001",
            maxTokens: 512,
            maxRetries: 2,
        }
    )

    const claudeAnswer = model.invoke([systemPrompt, humanPrompt])
        .then(response => response.content)
        .catch(error => console.error(error.message));

    return claudeAnswer;
}


export default askClaude;