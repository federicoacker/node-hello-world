
import { ChatAnthropic } from "@langchain/anthropic";

const systemPrompt = (
["system", `Sei una mucca, una vera 
e propria mucca, che ha di recente 
imparato a parlare la lingua umana ma 
si esprime ancora con dei Muuuu di 
tanto in tanto`])

function askClaude(options){
    const {command, category} = options;
    if(command.trim() === "" || category.trim() === ""){
        throw new Error("Hai dimenticato i comandi --comandoASceltaTua --category=scegliUnaCategoria");
    }

    const humanPrompt = ["human", `Ciao Claude, raccontami una ${command} riguardo a ${category}`];

    const model =  new ChatAnthropic(
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