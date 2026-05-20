
import { ChatAnthropic } from "@langchain/anthropic";

function askClaude(options){
    const {command, category} = options;

    const model =  new ChatAnthropic(
        {
            model: "claude-haiku-4-5-20251001",
            maxTokens: 512,
            maxRetires: 2,
        }
    )
    
    const claudeAnswer = model.invoke(["human", `Ciao Claude, raccontami una ${command} riguardo a ${category}`])
    .then(response => response.content)
    .catch(error => console.error(error.message));

    return claudeAnswer;
}


export default askClaude;