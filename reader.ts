import { operators } from "./constants";

export function readAbbreviation(abbr: string):string {
    let result = "";
    let stack: string[] = [];
    let token = "";

    abbr.

    abbr.map((char) => {
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

        }
    })

    return result;
}
