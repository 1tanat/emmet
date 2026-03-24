import readAbbreviation from "./reader";
import { tokenizeText } from "./tokenizer";

export function emmet(): void {
    const tokens = tokenizeText(abbr);
    console.log(tokens);
    return readAbbreviation(abbr);
}
