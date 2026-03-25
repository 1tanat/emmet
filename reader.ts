import { operators } from "./constants";
import { tokenizeText } from "./tokenizer";

export function readAbbreviation(abbr: string):string {
    let result = "";
    let stack: string[] = [];
    let token = "";

    tokenizeText(abbr).map((char) => {
        switch (char) {
            case operators.class:
                result += 'class = "';
                stack.push('"');
                break;
            case operators.id:
                result += 'id = "';
                stack.push('"');
                break;
            case operators.child:
                result += ">";
                break;
            case operators.sibling:
                result += "+";
                break;
            case operators.multiplication:
                result += "*";
                break;
            default:
                result += char;
        }
    })

    return result;
}
